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
import { Button, Text, SearchBar, TextHighlight } from 'src/components';

const data = [
  {
    tracking_id: '123123',
    received: true,
    storage: '50 Days',
    origin: 'Italy',
    shipped_from: 'US',
    status: 'Disposed'
  },
  {
    tracking_id: '123123',
    received: true,
    storage: '50 Days',
    origin: 'Italy',
    shipped_from: 'US',
    status: 'Added to Shipment'
  },
  {
    tracking_id: '123123',
    received: true,
    storage: 'Delivered',
    origin: 'Italy',
    shipped_from: 'US',
    status: 'Processing'
  },
  {
    tracking_id: '123123',
    received: true,
    storage: 'Delivered',
    origin: 'Italy',
    shipped_from: 'US',
    status: 'Delivered'
  },
  {
    tracking_id: '123123',
    received: true,
    storage: 'Delivered',
    origin: 'Italy',
    shipped_from: 'US',
    status: 'Package Recieved'
  }
];

const ReceivedPackages = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
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
              <Text style={styles.heading}>Tracking ID: </Text>
              <Text style={styles.subHeading}>{item.tracking_id}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Received: </Text>
              <Text style={styles.subHeading}>
                {item.received ? 'YES' : 'NO'}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Storage: </Text>
              <TextHighlight error={item.storage.toLowerCase() !== 'delivered'}>
                {item.storage}
              </TextHighlight>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Origin: </Text>
              <Text style={styles.subHeading}>{item.origin}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Shipped From: </Text>
              <Text style={styles.subHeading}>{item.shipped_from}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.heading}>Status: </Text>
              <TextHighlight error={item.status.toLowerCase() === 'disposed'}>
                {item.status}
              </TextHighlight>
            </View>
          </View>
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
