import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Text,
  SearchBar,
  TextHighlight,
  ChangeCountry,
  Title
} from 'src/components';
import { vipServices } from 'src/services/api/ApiManager';
import {
  getPriceByRate,
  normalizeDate,
  normalizeTime
} from 'src/services/constants';
import { PAYMENT_STATUS } from 'src/services/enums';

const BookVIPService = () => {
  const navigation = useNavigation();
  const [{ accessToken, currencyRate, shop }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [services, setServices] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const handleGetVipServices = async () => {
    setLoading(true);
    const response = await vipServices(accessToken);
    if (response.status === 200) {
      setList(response?.data?.data);
      setServices(response?.data?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetVipServices();
  }, [shop]);

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setList(services);
    } else {
      let _data = list && list.length === 0 ? services : [...list];
      _data = _data.filter(
        item =>
          item.created_at.toLowerCase().includes(search.toLowerCase()) ||
          item.service_date.toLowerCase().includes(search.toLowerCase()) ||
          item.total_hours
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.total_miles
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      );
      setServices(_data);
      setSearchParam(search);
    }
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
        <ChangeCountry />
        <SearchBar
          value={searchParam}
          onChangeText={value => handleSearch(value)}
        />
        <FlatList
          data={services}
          style={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('BookVIPServiceDetails', {
                  id: item.id
                })
              }>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Date: </Text> */}
                <Title label="Date" />
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.created_at)}
                </Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Shopping Date: </Text> */}
                <Title label="Shopping Date" />
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.service_date)}
                </Text>
              </View>
              <View style={[styles.row, { alignItems: 'flex-start' }]}>
                {/* <Text style={styles.heading}>Shopping Time (24h): </Text> */}
                <Title label="Shopping Time (24h)" />
                <Text style={styles.cost}>{item?.service_time}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Hours: </Text> */}
                <Title label="Hours" />
                <Text style={styles.subHeading}>{item?.total_hours}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Miles: </Text> */}
                <Title label="Miles" />
                <Text style={styles.cost}>{item?.total_miles}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>
                  {`Total Cost (${currencyRate?.currency_code}):`}{' '}
                </Text> */}
                <Title label={`Total Cost (${currencyRate?.currency_code}):`} />
                <Text style={styles.cost}>{`${getPriceByRate(
                  item?.total_fees,
                  currencyRate?.currency_rate
                )?.toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Status: </Text> */}
                <Title label="Status" />
                <TextHighlight error={PAYMENT_STATUS[item?.payment_status]}>
                  {PAYMENT_STATUS[item?.payment_status]}
                </TextHighlight>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.newShipmentContainer}
        onPress={() => navigation.navigate('CreateVIPOrder')}>
        {/* <MaterialCommunityIcons name="store-plus" color="#fff" size={25} /> */}
        <Text style={styles.newShipmentText}>Create Order</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  contentContainer: {
    alignItems: 'center'
  },
  body: {
    paddingTop: 50,
    width: '100%'
  },
  flatlist: {
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    padding: 10
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    width: '40%'
  },
  subHeading: {
    fontSize: 14,
    width: '60%',
    marginLeft: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  newShipmentContainer: {
    position: 'absolute',
    bottom: 110,
    right: 20,
    backgroundColor: '#1584F7',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 5
  },
  newShipmentText: {
    width: '100%',
    fontSize: 10,
    color: '#fff',
    textAlign: 'center'
  },
  cost: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3699ff',
    width: '60%',
    marginLeft: 10
  }
});

export default BookVIPService;
