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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Text, SearchBar, TextHighlight } from 'src/components';

const data = [
  {
    order_id: '366',
    date: '18-03-2022',
    product_price: '666',
    number_of_websites: '2',
    fees: '44.40',
    total_cost: '710.4',
    payment_scheduled: '100%',
    status: 'Payment Pending'
  },
  {
    order_id: '366',
    date: '18-03-2022',
    product_price: '666',
    number_of_websites: '2',
    fees: '44.40',
    total_cost: '710.4',
    payment_scheduled: '100%',
    status: 'Payment Pending'
  },
  {
    order_id: '366',
    date: '18-03-2022',
    product_price: '666',
    number_of_websites: '2',
    fees: '44.40',
    total_cost: '710.4',
    payment_scheduled: '100%',
    status: 'Payment Pending'
  },
  {
    order_id: '366',
    date: '18-03-2022',
    product_price: '666',
    number_of_websites: '2',
    fees: '44.40',
    total_cost: '710.4',
    payment_scheduled: '100%',
    status: 'Payment Pending'
  },
  {
    order_id: '366',
    date: '18-03-2022',
    product_price: '666',
    number_of_websites: '2',
    fees: '44.40',
    total_cost: '710.4',
    payment_scheduled: '100%',
    status: 'Payment Pending'
  }
];

const BuyForMe = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <SearchBar />
        <FlatList
          data={data}
          style={styles.flatlist}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.card,
                { marginBottom: data.length - 1 === index ? 130 : 10 }
              ]}>
              <View style={styles.row}>
                <Text style={styles.heading}>Order ID: </Text>
                <Text style={styles.subHeading}>{item.order_id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Date: </Text>
                <Text style={styles.subHeading}>{item.date}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Product Price: </Text>
                <Text style={styles.cost}>{item.product_price}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Number of Websites: </Text>
                <Text style={styles.subHeading}>{item.number_of_websites}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Fees: </Text>
                <Text style={styles.cost}>{item.fees}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Total Cost (MYR): </Text>
                <Text style={styles.cost}>{item.total_cost}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Payment Scheduled: </Text>
                <Text style={styles.cost}>{item.payment_scheduled}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Status: </Text>
                <TextHighlight
                  error={item.status.toLowerCase() === 'payment pending'}>
                  {item.status}
                </TextHighlight>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.newShipmentContainer}
          onPress={() => navigation.navigate('CreateOrder')}>
          <Text style={styles.newShipmentText}>Create New Order</Text>
        </TouchableOpacity>
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

export default BuyForMe;
