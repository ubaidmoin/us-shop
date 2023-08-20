import React, { useState, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Modal,
  Linking,
  ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  SearchBar,
  TextHighlight,
  Header,
  PayNow,
  Label,
  CheckBox
} from 'src/components';
import { payNowBillPlz, viewBuyForMe } from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, PAYMENT_STATUS } from 'src/services/enums';
import moment from 'moment';
import { getPriceByRate, normalizeDate } from 'src/services/constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { settings } from 'src/services/Settings';

const BuyForMeDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currencyRate }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showPayNow, setShowPayNow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleGetBuyForMe = async () => {
    setLoading(true);
    const response = await viewBuyForMe(accessToken, id);
    console.log(response?.data);
    if (response.status === 200) {
      setItem(response?.data?.order);
      setGallery(response?.data?.gallery);
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
    handleGetBuyForMe();
  }, []);

  return (
    <>
      <Header isStack />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center' }}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.row}>
            <Text style={styles.heading}>Order ID: </Text>
            <Text style={styles.subHeading}>{item?.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Date: </Text>
            <Text style={styles.subHeading}>
              {normalizeDate(item?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Product Price: </Text>
            <Text style={styles.cost}>{`${
              currencyRate?.currency_code
            } ${getPriceByRate(
              item?.total_price,
              currencyRate?.currency_rate
            )?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Number of Websites: </Text>
            <Text style={styles.subHeading}>{item?.total_websites}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Fees: </Text>
            <Text style={styles.cost}>{`${
              currencyRate?.currency_code
            } ${getPriceByRate(
              item?.total_fees,
              currencyRate?.currency_rate
            )?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.row}>
            <Text
              style={
                styles.heading
              }>{`Total Cost (${currencyRate?.currency_code}): `}</Text>
            <Text style={styles.cost}>{`${
              currencyRate?.currency_code
            } ${getPriceByRate(
              item?.total_fees + item?.total_price,
              currencyRate?.currency_rate
            )?.toFixed(2)}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Payment Scheduled: </Text>
            <Text style={styles.cost}>{`${
              100 / parseInt(item?.price_schedule, 0)
            }`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.heading}>Status: </Text>
            <TextHighlight error={PAYMENT_STATUS[item?.payment_status]}>
              {PAYMENT_STATUS[item?.payment_status]}
            </TextHighlight>
          </View>
          <View style={{ marginTop: 20, padding: 5 }}>
            <Label label="Product Notes" />
            <Text style={styles.subHeading}>{item?.product_notes}</Text>
          </View>
          <View style={{ marginTop: 20, padding: 5 }}>
            <Label label="Admin Notes" />
            <Text style={styles.subHeading}>{item?.notes}</Text>
          </View>
          <View style={{ marginTop: 20, padding: 5 }}>
            <Label label="Attachments" />
            {gallery &&
              gallery?.length > 0 &&
              gallery?.map(item => (
                <View>
                  <Label label={item?.image_name} />
                  <Image
                    source={{
                      uri: `${settings?.imagePath}/${item?.image_name}`
                    }}
                    style={{ width: '100%', height: 200, borderRadius: 5 }}
                  />
                </View>
              ))}
            {gallery?.length === 0 && (
              <Text style={styles.subHeading}>No Attachments</Text>
            )}
          </View>
        </View>
        {PAYMENT_STATUS[item?.payment_status] === 'Payment Pending' && (
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
              onPress={() =>
                currencyRate?.currency_code === 'MYR'
                  ? handleBillPlz()
                  : setShowPayNow(true)
              }
            />
          </View>
        )}
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
            service="buyforme"
            showPayNow={showPayNow}
            setShowPayNow={setShowPayNow}
            reload={handleGetBuyForMe}
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

export default BuyForMeDetails;
