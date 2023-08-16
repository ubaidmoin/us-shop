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
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Button, Text, SearchBar, TextHighlight, Header } from 'src/components';
import {
  viewAddOns,
  viewBuyForMe,
  viewVipServices
} from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, PAYMENT_STATUS } from 'src/services/enums';
import moment from 'moment';
import { getPriceByRate, normalizeDate } from 'src/services/constants';

const AddOnsDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currencyRate }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState();

  const handleGetAddOns = async () => {
    setLoading(true);
    const response = await viewAddOns(accessToken, id);
    console.log(response?.data);
    if (response.status === 200) {
      setItem(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetAddOns();
  }, []);

  const { order, addons } = item || { order: null, addons: [] };

  return (
    <>
      <Header isStack />
      <View style={styles.container}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.row}>
            <Text style={styles.heading}>ID: </Text>
            <Text style={styles.subHeading}>{order?.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Date: </Text>
            <Text style={styles.subHeading}>
              {normalizeDate(order?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>
              Amount ({currencyRate?.currency_code}):{' '}
            </Text>
            <Text style={styles.cost}>
              {getPriceByRate(order?.total_fees, currencyRate?.currency_rate)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Payment: </Text>
            <TextHighlight error={PAYMENT_STATUS[order?.payment_status]}>
              {PAYMENT_STATUS[order?.payment_status]}
            </TextHighlight>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Status: </Text>
            <TextHighlight>{'Processing'}</TextHighlight>
          </View>
        </View>

        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.col}>
            <Text style={styles.heading}>Details </Text>
            {addons?.map((addon, index) => (
              <>
                <View style={styles.row}>
                  <Text style={styles.heading}>Tracking #: </Text>
                  <Text style={styles.subHeading}>{addon?.item}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.heading}>Received Date: </Text>
                  <Text style={styles.subHeading}>
                    {normalizeDate(addon?.date || new Date())}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.heading}>Service: </Text>
                  <Text style={styles.subHeading}>{addon?.service}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
      </View>
    </>
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
  col: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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

export default AddOnsDetails;
