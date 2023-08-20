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
  ChangeCountry
} from 'src/components';
import { addOnsList } from 'src/services/api/ApiManager';
import { getPriceByRate, normalizeDate } from 'src/services/constants';
import { PAYMENT_STATUS } from 'src/services/enums';

const AddOns = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [{ accessToken, currencyRate, shop }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [addOns, setAddOns] = useState([]);

  const handleGetAddOns = async () => {
    setLoading(true);
    const response = await addOnsList(accessToken);
    console.log(response.data);
    if (response.status === 200) {
      setList(response?.data?.data);
      setAddOns(response?.data?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      handleGetAddOns();
    }
  }, [isFocused]);

  useEffect(() => {
    handleGetAddOns();
  }, [shop]);

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setList(addOns);
    } else {
      let _data = list && list.length === 0 ? addOns : [...list];
      console.log(_data);
      _data = _data.filter(
        item =>
          item.id.toString().includes(search) ||
          item.created_at
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.total_fees
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      );
      setAddOns(_data);
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
          data={addOns}
          style={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('AddOnsDetails', {
                  id: item?.id
                })
              }>
              <View style={styles.row}>
                <Text style={styles.heading}>ID: </Text>
                <Text style={styles.subHeading}>{item?.id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Date: </Text>
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.created_at)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>
                  Amount ({currencyRate?.currency_code}):{' '}
                </Text>
                <Text style={styles.cost}>
                  {getPriceByRate(
                    item?.total_fees,
                    currencyRate?.currency_rate
                  )?.toFixed(2)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Payment: </Text>
                <TextHighlight error={PAYMENT_STATUS[item?.payment_status]}>
                  {PAYMENT_STATUS[item?.payment_status]}
                </TextHighlight>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Status: </Text>
                <TextHighlight>{'Processing'}</TextHighlight>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.newShipmentContainer}
        onPress={() => navigation.navigate('CreateAddon')}>
        {/* <MaterialCommunityIcons name="store-plus" color="#fff" size={25} /> */}
        <Text style={styles.newShipmentText}>Create Addon</Text>
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
    width: '60%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  newShipmentContainer: {
    position: 'absolute',
    bottom: 20,
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
    color: '#3699ff'
  }
});

export default AddOns;
