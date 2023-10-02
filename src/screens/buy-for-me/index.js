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
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Header,
  Text,
  SearchBar,
  TextHighlight,
  ChangeCountry,
  Title
} from 'src/components';
import { buyForMeList } from 'src/services/api/ApiManager';
import { getPriceByRate, normalizeDate } from 'src/services/constants';
import { PAYMENT_STATUS } from 'src/services/enums';

const BuyForMe = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [{ accessToken, shop }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [buyForMe, setBuyForMe] = useState([]);

  const handleGetBuyForMe = async () => {
    setLoading(true);
    try {
      const response = await buyForMeList(accessToken);
      console.log(response?.data?.data);
      if (response.status === 200) {
        setBuyForMe(response?.data?.data);
        setList(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      handleGetBuyForMe();
    }
  }, [isFocused]);

  useEffect(() => {
    handleGetBuyForMe();
  }, [shop]);

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setList(buyForMe);
    } else {
      let _data = list && list.length === 0 ? buyForMe : [...list];
      _data = _data.filter(
        item =>
          item.id?.toString().toLowerCase().includes(search.toLowerCase()) ||
          item.created_at.toLowerCase().includes(search.toLowerCase()) ||
          item.total_price
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.total_websites
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      );
      setList(_data);
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
          data={buyForMe}
          style={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.card,
                { marginBottom: buyForMe?.length - 1 === index ? 130 : 10 }
              ]}
              onPress={() =>
                navigation.navigate('BuyForMeDetails', {
                  id: item?.id
                })
              }>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Order ID: </Text> */}
                <Title label="Order ID" />
                <Text style={styles.subHeading}>{item?.id}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Date: </Text> */}
                <Title label="Date" />
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.created_at)}
                </Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Product Price: </Text> */}
                <Title label="Product Price" />
                <Text style={styles.cost}>{`${
                  item?.get_currency?.currency_code
                } ${getPriceByRate(
                  item?.total_price,
                  item?.get_currency?.currency_rate
                )?.toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Number of Websites: </Text> */}
                <Title label="Number of Websites" />
                <Text style={styles.subHeading}>{item?.total_websites}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Fees: </Text> */}
                <Title label="Fees" />
                <Text style={styles.cost}>{`${
                  item?.get_currency?.currency_code
                } ${getPriceByRate(
                  item?.total_fees,
                  item?.get_currency?.currency_rate
                )?.toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text
                  style={
                    styles.heading
                  }>{`Total Cost (${item?.get_currency?.currency_code}): `}</Text> */}
                <Title
                  label={`Total Cost (${item?.get_currency?.currency_code})`}
                />
                <Text style={styles.cost}>{`${
                  item?.get_currency?.currency_code
                } ${getPriceByRate(
                  item?.total_fees + item?.total_price,
                  item?.get_currency?.currency_rate
                )?.toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Payment Scheduled: </Text> */}
                <Title label="Payment Scheduled" />
                <Text style={styles.cost}>{`${
                  100 / parseInt(item?.price_schedule, 0)
                }`}</Text>
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
        onPress={() => navigation.navigate('CreateOrder')}>
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
    fontSize: 11,
    color: '#fff',
    textAlign: 'center'
  },
  cost: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3699ff',
    marginLeft: 10
  }
});

export default BuyForMe;
