import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  SearchBar,
  TextHighlight,
  ChangeCountry
} from 'src/components';
import { getDelivered } from 'src/services/api/ApiManager';
import { SHIPPING_TYPE } from 'src/services/enums';
import { getPriceByRate, normalizeDate } from 'src/services/constants';

const Delivered = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [{ accessToken, currencyRate, shop }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [packages, setPackages] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    if (isFocused) {
      handleGetDelivered();
    }
  }, [isFocused]);

  const handleGetDelivered = async () => {
    setLoading(true);
    const response = await getDelivered(accessToken);
    if (response.status === 200) {
      setList(response?.data?.data);
      setPackages(response?.data?.data);
    }
    setLoading(false);
  };

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setList([...list]);
    } else {
      let _data = list && list.length === 0 ? packages : [...list];
      _data = _data.filter(
        item =>
          item.created_at.toLowerCase().includes(search.toLowerCase()) ||
          item.origin_country.toLowerCase().includes(search.toLowerCase()) ||
          item.address.toLowerCase().includes(search.toLowerCase()) ||
          item.total_cost
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.total_weight
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.tracking_code
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      );
      setPackages(_data);
      setSearchParam(search);
    }
  };

  useEffect(() => {
    handleGetDelivered();
  }, [shop]);

  return (
    <View style={styles.container}>
      <ChangeCountry />
      <SearchBar
        value={searchParam}
        onChangeText={value => handleSearch(value)}
      />
      <FlatList
        data={packages}
        style={styles.flatlist}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { marginBottom: list.length - 1 === index ? 130 : 10 }
            ]}
            onPress={() =>
              navigation.navigate('DeliveredDetails', {
                id: item.id
              })
            }>
            <View style={styles.row}>
              <Text style={styles.heading}>Type: </Text>
              <Text style={styles.subHeading}>
                {SHIPPING_TYPE[item?.shipping_type]}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Date: </Text>
              <Text style={styles.subHeading}>
                {item?.created_at ? normalizeDate(item?.created_at) : ''}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Country: </Text>
              <Text style={styles.subHeading}>{item?.origin_country}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Delivery Address: </Text>
              <Text style={styles.subHeading}>{item?.address}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>
                Shipped Cost ({currencyRate?.currency_code}):{' '}
              </Text>
              <Text style={styles.cost}>
                {getPriceByRate(
                  item?.total_cost,
                  currencyRate?.currency_rate
                ).toFixed(2)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Weight (LBS): </Text>
              <Text style={styles.subHeading}>{item?.total_weight}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Tracking ID: </Text>
              <Text style={styles.subHeading}>{item?.tracking_code || ''}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.newShipmentContainer}
        onPress={() => navigation.navigate('CreateShipment')}>
        <Text style={styles.newShipmentText}>New Shipment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
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
    fontSize: 12,
    color: '#fff',
    textAlign: 'center'
  },
  cost: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3699ff'
  }
});

export default Delivered;
