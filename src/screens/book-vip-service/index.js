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
    date: '18-03-2022',
    shopping_date: '18-03-2022',
    shopping_time: '10:25',
    hours: '5',
    miles: '25',
    total_cost: '1221.00',
    status: 'Approval Pending'
  },
  {
    date: '18-03-2022',
    shopping_date: '18-03-2022',
    shopping_time: '10:25',
    hours: '5',
    miles: '25',
    total_cost: '1221.00',
    status: 'Approval Pending'
  },
  {
    date: '18-03-2022',
    shopping_date: '18-03-2022',
    shopping_time: '10:25',
    hours: '5',
    miles: '25',
    total_cost: '1221.00',
    status: 'Approval Pending'
  },
  {
    date: '18-03-2022',
    shopping_date: '18-03-2022',
    shopping_time: '10:25',
    hours: '5',
    miles: '25',
    total_cost: '1221.00',
    status: 'Approval Pending'
  },
  {
    date: '18-03-2022',
    shopping_date: '18-03-2022',
    shopping_time: '10:25',
    hours: '5',
    miles: '25',
    total_cost: '1221.00',
    status: 'Approval Pending'
  }
];

const BookVIPService = () => {
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
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.heading}>Date: </Text>
                <Text style={styles.subHeading}>{item.date}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Shopping Date: </Text>
                <Text style={styles.subHeading}>{item.shopping_date}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Shopping Time: </Text>
                <Text style={styles.cost}>{item.shopping_time}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Hours: </Text>
                <Text style={styles.subHeading}>{item.hours}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Miles: </Text>
                <Text style={styles.cost}>{item.miles}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Total Cost (MYR): </Text>
                <Text style={styles.cost}>{item.total_cost}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Status: </Text>
                <TextHighlight
                  error={item.status.toLowerCase() === 'approval pending'}>
                  {item.status}
                </TextHighlight>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.newShipmentContainer}
          onPress={() => navigation.navigate('CreateVIPOrder')}>
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
    bottom: 20,
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

export default BookVIPService;
