import React, { useState, useEffect, useMemo } from 'react';
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
import { getReceivedPackages } from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, SHIPPING_STATUS } from 'src/services/enums';
import moment from 'moment';
import { normalizeDate } from 'src/services/constants';

const ReceivedPackages = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [{ accessToken, shop }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [packages, setPackages] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  const handleGetReceivedPackages = async () => {
    setLoading(true);
    const response = await getReceivedPackages(accessToken);
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
          item.tracking_id
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.recieved_date.toLowerCase().includes(search.toLowerCase()) ||
          item.origin_address.toLowerCase().includes(search.toLowerCase()) ||
          item.package_size
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      );
      setPackages(_data);
      setSearchParam(search);
    }
  };

  useEffect(() => {
    if (isFocused) {
      handleGetReceivedPackages();
    }
  }, [isFocused]);

  useEffect(() => {
    handleGetReceivedPackages();
  }, [shop]);

  // const country = useMemo(() => countries?.find(c => c?.id ===), [countries]);

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
              { marginBottom: list?.length - 1 === index ? 130 : 10 }
            ]}
            onPress={() =>
              navigation.navigate('ReceivedPackageDetails', {
                id: item.id
              })
            }>
            <View style={styles.row}>
              <Text style={styles.heading}>Tracking ID: </Text>
              <Text style={styles.subHeading}>{item.tracking_id}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Received: </Text>
              <Text style={styles.subHeading}>
                {normalizeDate(item?.recieved_date)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Storage: </Text>
              <TextHighlight>
                {moment(new Date()).diff(item?.recieved_date, 'days')}
              </TextHighlight>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Origin: </Text>
              <Text style={styles.subHeading}>{item?.origin_address}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Dimensions (IN): </Text>
              <Text style={styles.subHeading}>{item?.package_size}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Status: </Text>
              <TextHighlight>
                {PACKAGE_STATUS[item?.package_status]}
              </TextHighlight>
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
  }
});

export default ReceivedPackages;
