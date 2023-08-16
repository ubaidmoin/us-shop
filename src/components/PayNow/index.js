import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert
} from 'react-native';
import {
  deletePaymentMethod,
  getPaymentCards,
  payNow
} from 'src/services/api/ApiManager';
import { useStateValue } from 'src/services/state/State';
import Button from '../Button';
import { useIsFocused } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { toTitleCase } from 'src/services/constants';

const PayNow = ({
  id,
  service,
  showPayNow = false,
  setShowPayNow = () => {},
  reload = () => {}
}) => {
  const isFocused = useIsFocused();
  console.log('isFocused', isFocused);
  const [{ accessToken }, dispatch] = useStateValue();
  const [cards, setCards] = useState([]);
  const [cardURL, setCardURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleGetCards = async () => {
    setLoading(true);
    const response = await getPaymentCards(accessToken);
    console.log('response?.data', response?.data);
    if (response.status === 200) {
      setCards(response?.data?.data);
      setCardURL(response?.data?.cardURL);
    }
    setLoading(false);
  };

  const handleDeleteCard = async id => {
    setLoading(true);
    const response = await deletePaymentMethod(id, accessToken);
    if (response.status === 200) {
      handleGetCards();
      Alert.alert('Success', 'Card deleted successfully');
    }
    setLoading(false);
  };

  const handlePayNow = async method => {
    if (!selectedCard) {
      Alert.alert('Warning', 'Please select card to pay');
    } else {
      setLoadingPayment(true);
      const response = await payNow(accessToken, id, service, method);
      if (response.status === 200) {
        Alert.alert(
          toTitleCase(response?.data?.status),
          response?.data?.message
        );
        if (response?.data?.status?.toLowerCase() === 'success') {
          setShowPayNow(false);
          reload();
        }
      }
      setLoadingPayment(false);
    }
  };

  useEffect(() => {
    handleGetCards();
  }, [isFocused]);

  console.log('selectedCard', selectedCard);
  return (
    <>
      <View style={styles.view}>
        {loading && <ActivityIndicator size="large" color="grey" />}
        {!loading &&
          cards &&
          cards.length > 0 &&
          cards?.map(card => (
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                setSelectedCard(selectedCard !== card?.id ? card?.id : null)
              }>
              <View style={{ width: '8%' }}>
                <Fontisto
                  name={
                    selectedCard === card?.id
                      ? 'radio-btn-active'
                      : 'radio-btn-passive'
                  }
                  color="#3699ff"
                  size={20}
                />
              </View>
              <View style={{ width: '37%' }}>
                {card?.card?.brand === 'visa' ? (
                  <Image
                    source={require('src/assets/images/visa.png')}
                    style={{ width: 100, height: 50 }}
                    resizeMode="contain"
                  />
                ) : card?.card?.brand === 'mastercard' ? (
                  <Image
                    source={require('src/assets/images/mastercard.png')}
                    style={{ width: 100, height: 50 }}
                    resizeMode="contain"
                  />
                ) : null}
              </View>
              <View style={{ width: '45%' }}>
                <Text style={styles.fullText}>
                  {card?.billing_details?.name}
                </Text>
                <Text
                  style={
                    styles.fullText
                  }>{`**** **** **** ${card?.card?.last4}`}</Text>
                <Text style={[styles.fullText, { color: 'grey' }]}>
                  {`Expires ${card?.card?.exp_month}/${card?.card?.exp_year}`}
                </Text>
              </View>
              <TouchableOpacity
                style={{ width: '10%', zIndex: 10 }}
                onPress={() => handleDeleteCard(card?.id)}>
                <EvilIcons name="trash" color="red" size={30} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        {!loading && cards && cards.length === 0 && (
          <Text style={{ fontSize: 16, color: 'grey' }}>
            No card found. Please add new card.
          </Text>
        )}
        <View style={{ width: '100%', marginTop: 50 }}>
          <Button
            label="Add New Card"
            fill
            onPress={() => Linking.openURL(cardURL)}
            disabled={loadingPayment}
          />
          <Button
            label="Cancel"
            onPress={() => setShowPayNow(false)}
            fill={false}
            danger
            disabled={loadingPayment}
          />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button
          label="Pay Now"
          fill
          onPress={() => handlePayNow(selectedCard)}
          loading={loadingPayment}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    paddingVertical: 50
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
  fullText: {
    fontSize: 14,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    paddingBottom: 20,
    marginVertical: 5,
    borderBottomWidth: 0.2,
    borderColor: 'grey'
  }
});

export default PayNow;
