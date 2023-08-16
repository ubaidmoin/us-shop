import React, { useState, useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Text, Header, Button, Price } from 'src/components';
import { viewShipment } from 'src/services/api/ApiManager';
import { PAYMENT_STATUS, SHIPPING_TYPE } from 'src/services/enums';
import { getPriceByRate, normalizeDate } from 'src/services/constants';

const DeliveredDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currencyRate }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  const handleGetShipment = async () => {
    setLoading(true);
    const response = await viewShipment(accessToken, id);
    console.log('response?.data', response?.data);
    if (response.status === 200) {
      setItem(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetShipment();
  }, []);

  const {
    items,
    package: packageDetails,
    userShipment
  } = useMemo(
    () => item || { items: [], package: {}, userShipment: {} },
    [item]
  );

  const cost = getPriceByRate(
    packageDetails?.total_cost,
    currencyRate?.currency_rate
  );

  const storage_fees = getPriceByRate(
    packageDetails?.storage_fees,
    currencyRate?.currency_rate
  );

  const dangerous_goods = getPriceByRate(
    packageDetails?.dangerous_goods,
    currencyRate?.currency_rate
  );

  const local_cost = getPriceByRate(
    packageDetails?.local_shipping_cost,
    currencyRate?.currency_rate
  );

  const insurance = getPriceByRate(
    packageDetails?.insurance,
    currencyRate?.currency_rate
  );

  const other_cost = cost - local_cost;
  const total_cost = cost + storage_fees + dangerous_goods + insurance;

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center' }}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.row}>
            <Text style={styles.heading}>Received: </Text>
            <Text style={styles.subHeading}>
              {normalizeDate(packageDetails?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Shipping Type: </Text>
            <Text style={styles.subHeading}>
              {SHIPPING_TYPE[packageDetails?.shipping_type]}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Customer Detail: </Text>
            <View>
              <Text>{userShipment?.customer_name}</Text>
              <Text>{userShipment?.customer_email}</Text>
              <Text>{userShipment?.customer_phone}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Delivery Address: </Text>
            <Text style={styles.subHeading}>{userShipment?.address}</Text>
          </View>
        </View>
        <View style={[styles.card, { marginBottom: 10, padding: 10 }]}>
          <Text style={styles.heading}>TAX & DUTY</Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>
            Shipment from USA to Malaysia will be under Global Incoterm
            Delivered Duty Paid (taxes included)
          </Text>
          <Text style={[styles.heading, { marginTop: 10 }]}>
            Declared Value
          </Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>USD</Text>
        </View>
        <View style={[styles.card, { marginBottom: 10, padding: 10 }]}>
          <Text style={styles.heading}>SHIPPING DETAILS</Text>
          <Text style={[styles.heading, { marginTop: 10 }]}>
            Tracking Code:
          </Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>
            {packageDetails?.tracking_code || ''}
          </Text>
          <Text style={[styles.heading, { marginTop: 10 }]}>Total Weight:</Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>
            {`${packageDetails?.total_weight} (LBS)`}
          </Text>
        </View>
        <View style={[styles.card, { marginBottom: 140, padding: 10 }]}>
          <Text style={styles.heading}>PAYMENT DETAILS</Text>
          <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
            Shipping Option:
          </Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>
            {packageDetails?.shipping_option || ''}
          </Text>
          <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
            Shipping Cost:
          </Text>
          <Price price={cost} />
          <Text style={[styles.subHeading, { width: '100%' }]}>
            {'Locker Warehouse to Malaysia (Warehouse) '}
            <Text style={{ fontWeight: '600' }}>
              {`${cost?.toFixed(2)} (${currencyRate?.currency_code})`}
            </Text>
          </Text>
          <Text style={[styles.subHeading, { width: '100%' }]}>
            {'Malaysia Warehouse to Your Location '}
            <Text style={{ fontWeight: '600' }}>
              {`${local_cost?.toFixed(2)} (${currencyRate?.currency_code})`}
            </Text>
          </Text>
          <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
            Storage Fees:
          </Text>
          <Price price={storage_fees} />
          <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
            Dangerous Goods Fees:
          </Text>
          <Price price={dangerous_goods} />
          <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
            Insurance:
          </Text>
          <Price price={insurance} />

          <View
            style={{
              marginTop: 10,
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              paddingTop: 10
            }}>
            <Text style={[styles.heading, { marginTop: 10, width: '100%' }]}>
              TOTAL COST
            </Text>
            <Price price={total_cost} />
          </View>
          {PAYMENT_STATUS[packageDetails?.payment_status] ===
            'Payment Pending' && (
            <View style={{ width: '100%', marginTop: 10 }}>
              <Button label="Pay With Card" fill />
            </View>
          )}
        </View>
      </ScrollView>
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

export default DeliveredDetails;
