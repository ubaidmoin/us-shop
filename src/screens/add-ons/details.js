import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, Linking, Alert, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  SearchBar,
  TextHighlight,
  Header,
  Title,
  PayNow,
  CheckBox
} from 'src/components';
import {
  payNowBillPlz,
  viewAddOns,
  viewBuyForMe,
  viewVipServices
} from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, PAYMENT_STATUS } from 'src/services/enums';
import moment from 'moment';
import { getPriceByRate, normalizeDate } from 'src/services/constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AddOnsDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;
  const [showPayNow, setShowPayNow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleBillPlz = async () => {
    setLoading(true);
    const response = await payNowBillPlz(accessToken, item?.order?.id, 'addon');
    console.log(response);
    if (response.status === 200) {
      Linking.openURL(response?.data?.url);
    } else {
      Alert.alert(
        'Error',
        'Unfortunately, we are unable to process your payment at the moment. Please try again later.'
      );
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
            {/* <Text style={styles.heading}>ID: </Text> */}
            <Title label="ID" />
            <Text style={styles.subHeading}>{order?.id}</Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Date: </Text> */}
            <Title label="Date" />
            <Text style={styles.subHeading}>
              {normalizeDate(order?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>
              Amount ({currencyRate?.currency_code}):{' '}
            </Text> */}
            <Title label={`Amount (${currencyRate?.currency_code})`} />
            <Text style={{ marginLeft: 10 }}>
              {getPriceByRate(
                order?.total_fees,
                currencyRate?.currency_rate
              )?.toFixed(2)}
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Payment: </Text> */}
            <Title label="Payment" />
            <TextHighlight error={PAYMENT_STATUS[order?.payment_status]}>
              {PAYMENT_STATUS[order?.payment_status]}
            </TextHighlight>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Status: </Text> */}
            <Title label="Status" />
            <TextHighlight>{'Processing'}</TextHighlight>
          </View>
        </View>

        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.col}>
            <Text style={styles.heading}>Details </Text>
            {addons?.map((addon, index) => (
              <>
                <View style={styles.row}>
                  {/* <Text style={styles.heading}>Tracking #: </Text> */}
                  <Title label="Tracking #" />
                  <Text style={styles.subHeading}>{addon?.item}</Text>
                </View>
                <View style={styles.row}>
                  {/* <Text style={styles.heading}>Received Date: </Text> */}
                  <Title label="Received Date" />
                  <Text style={styles.subHeading}>
                    {normalizeDate(addon?.date || new Date())}
                  </Text>
                </View>
                <View style={styles.row}>
                  {/* <Text style={styles.heading}>Service: </Text> */}
                  <Title label="Service" />
                  <Text style={styles.subHeading}>{addon?.service}</Text>
                </View>
              </>
            ))}
          </View>
        </View>
        {PAYMENT_STATUS[order?.payment_status] === 'Payment Pending' && (
          <View style={{ width: '100%', marginTop: 20, paddingBottom: 120 }}>
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
              loading={loading}
              disabled={!isChecked}
              onPress={() =>
                currencyRate?.currency_code === 'MYR'
                  ? handleBillPlz()
                  : setShowPayNow(true)
              }
            />
          </View>
        )}
      </View>
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
            service="buyforme"
            showPayNow={showPayNow}
            setShowPayNow={setShowPayNow}
            reload={handleGetAddOns}
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
    width: '60%',
    marginLeft: 10
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
    marginTop: '20%'
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

export default AddOnsDetails;
