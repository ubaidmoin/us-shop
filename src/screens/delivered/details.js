import React, { useState, useEffect, useMemo } from 'react';
import { Linking, Modal, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Text,
  Header,
  Button,
  Price,
  PayNow,
  MessageBox,
  ShippingStatusStepper,
  CheckBox,
  Title
} from 'src/components';
import { payNowBillPlz, viewDelivered } from 'src/services/api/ApiManager';
import {
  PAYMENT_STATUS,
  SHIPPING_STATUS,
  SHIPPING_TYPE
} from 'src/services/enums';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getPriceByRate, normalizeDate } from 'src/services/constants';
import {
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

const DeliveredDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currencyRate }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [showPayNow, setShowPayNow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleGetDelivered = async () => {
    setLoading(true);
    const response = await viewDelivered(accessToken, id);
    console.log('response?.data', response?.data);
    if (response.status === 200) {
      setItem(response?.data);
    }
    setLoading(false);
  };

  const handleBillPlz = async () => {
    setLoading(true);
    const response = await payNowBillPlz(accessToken, id, 'buyforme');
    console.log(response?.data);
    if (response.status === 200) {
      Linking.openURL(response?.data?.url);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetDelivered();
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

  const total_cost = cost + storage_fees + dangerous_goods + insurance;
  const shipping_status = packageDetails?.shipping_status;

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center' }}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Received: </Text> */}
            <Title label="Received" />
            <Text style={styles.subHeading}>
              {normalizeDate(packageDetails?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Shipping Type: </Text> */}
            <Title label="Shipping Type" />
            <Text style={styles.subHeading}>
              {SHIPPING_TYPE[packageDetails?.shipping_type]}
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Customer Detail: </Text> */}
            <Title label="Customer Detail" />
            <View>
              <Text>{userShipment?.customer_name}</Text>
              <Text>{userShipment?.customer_email}</Text>
              <Text>{userShipment?.customer_phone}</Text>
            </View>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Delivery Address: </Text> */}
            <Title label="Delivery Address" />
            <Text style={styles.subHeading}>{userShipment?.address}</Text>
          </View>
        </View>
        <ShippingStatusStepper
          admin_notes={packageDetails?.admin_notes}
          shipping_status={shipping_status}
        />
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
            <View style={{ width: '100%', marginTop: 20 }}>
              {currencyRate?.currency_code === 'MYR' && (
                <CheckBox
                  message="I agree to the "
                  messageHighlight="terms & conditions"
                  checked={isChecked}
                  setChecked={setIsChecked}
                />
              )}
              <Button
                label={
                  currencyRate?.currency_code === 'MYR'
                    ? 'Pay Now'
                    : 'Pay With Card'
                }
                fill
                onPress={() =>
                  currencyRate?.currency_code === 'MYR'
                    ? handleBillPlz()
                    : setShowPayNow(true)
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
      <Modal
        visible={showPayNow}
        transparent
        style={styles.modal}
        animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowPayNow(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.messageBox}>
          <PayNow
            id={item?.id}
            service="shipment"
            showPayNow={showPayNow}
            setShowPayNow={setShowPayNow}
            reload={handleGetDelivered}
            disabled={!isChecked}
            setIsChecked={setIsChecked}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 100
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
  },
  price: {
    color: '#3699ff',
    fontWeight: 'bold',
    fontSize: 18
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  messageBox: {
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    alignSelf: 'center',
    marginTop: '50%'
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default DeliveredDetails;
