import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Button, Text, Header, ChangeCountry } from 'src/components';
import { formatPhoneNumber } from 'src/services/DataManager';
import { getCountries } from 'src/services/api/ApiManager';
import { actions } from 'src/services/state/Reducer';

const Dashboard = () => {
  const navigation = useNavigation();
  const [{ currentUser, accessToken }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    const res = await getCountries(accessToken);
    if (res && res.data) {
      dispatch({
        type: actions.SET_CURRENCY_RATE,
        payload: res?.data?.find(c => c.id === currentUser?.currency)
      });
      dispatch({
        type: actions.SET_COUNTRIES,
        payload: res?.data?.sort((a, b) => a.name.localeCompare(b.name))
      });
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  console.log('currentUser', currentUser);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <ChangeCountry />
        <View style={styles.info}>
          <Text style={styles.heading}>State Tax Free Address</Text>
          <Text style={styles.text}>
            You can use the following details if you want to purchase the items
            from the USA & we will do the shipping for you.
          </Text>
          <Text style={styles.subHeading}>Name</Text>
          <Text style={styles.subText}>
            {(currentUser && currentUser?.name) || ''}
          </Text>
          <Text style={styles.subHeading}>Address Line 1</Text>
          <Text style={styles.subText}>
            {(currentUser && currentUser?.street_address) || ''}
          </Text>
          <Text style={styles.subHeading}>Address Line 2</Text>
          <Text style={styles.subText}>
            {(currentUser &&
              currentUser?.street_address &&
              currentUser?.street_address.split(',') &&
              currentUser?.street_address.split(',').length > 1 &&
              currentUser?.street_address.split(',')[1]) ||
              ''}
          </Text>
          <Text style={styles.subHeading}>City, State, Zip Code</Text>
          <Text style={styles.subText}>{`${
            (currentUser && currentUser?.city) || ''
          }, ${(currentUser && currentUser?.state) || ''}, ${
            (currentUser && currentUser?.country) || ''
          }`}</Text>
          <Text style={styles.subHeading}>Phone</Text>
          <Text style={styles.subText}>{`${
            (currentUser && currentUser?.lscode) || ''
          } ${
            (currentUser && formatPhoneNumber(currentUser?.phone)) || ''
          }`}</Text>
          <Text style={[styles.heading, { marginTop: 10 }]}>
            {`Lock Number: ${(currentUser && currentUser?.locker_code) || ''}`}
          </Text>
        </View>
        <View style={styles.accountContainer}>
          <View style={styles.account}>
            <Text style={styles.heading}>Account Statement</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.pending}>
              <Ionicons
                name="wallet"
                color="#ffa800"
                size={35}
                style={{ marginTop: -8 }}
              />
              <Text style={styles.pendingText}>0 USD Pending</Text>
            </View>
            <View style={styles.paid}>
              <View style={styles.paidIcon}>
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  color="#3699ff"
                  size={25}
                />
              </View>
              <MaterialCommunityIcons
                name="checkbox-blank-circle"
                color="#afd5ff"
                size={25}
                style={styles.overlapIcon}
              />
              <Text style={styles.paidText}>0 USD Paid</Text>
            </View>
          </View>
        </View>
        <View style={styles.activites}>
          <Text style={[styles.heading, { color: '#000' }]}>
            Recent Activites
          </Text>
        </View>
        <View style={styles.tickets}>
          <View style={styles.headerRow}>
            <Text style={[styles.heading, { color: '#000' }]}>
              Support Tickets
            </Text>
            <Button
              label="Create New Ticket"
              customStyle={styles.createTickets}
              onPress={() => navigation.navigate('CreateTicket')}
            />
          </View>
          <Text style={styles.footer}>No tickets has been created yet.</Text>
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
  info: {
    backgroundColor: '#3699ff',
    padding: 20,
    width: '100%',
    shadowColor: '#3699ff',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10
  },
  accountContainer: {
    backgroundColor: '#f3f6f9',
    width: '100%',
    shadowColor: '#f3f6f9',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    borderRadius: 10,
    height: 200,
    marginTop: 20
  },
  activites: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    borderRadius: 10,
    marginTop: 20
  },
  tickets: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 140
  },
  account: {
    backgroundColor: '#f64e60',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    height: 100
  },
  heading: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500'
  },
  subHeading: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginTop: 15
  },
  text: {
    fontSize: 14,
    color: '#fff',
    marginTop: 15
  },
  subText: {
    fontSize: 14,
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  pending: {
    backgroundColor: '#fff4de',
    padding: 20,
    width: '40%',
    borderRadius: 10,
    height: 100,
    marginTop: -40
  },
  pendingText: {
    color: '#ffa800',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 10
  },
  paid: {
    backgroundColor: '#e1f0ff',
    padding: 20,
    width: '40%',
    borderRadius: 10,
    height: 100,
    marginTop: -40
  },
  paidIcon: {
    backgroundColor: '#e1f0ff',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    zIndex: 1
  },
  overlapIcon: {
    position: 'absolute',
    top: 13,
    left: 28,
    zIndex: -10
  },
  paidText: {
    color: '#3699ff',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 10
  },
  createTickets: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 0,
    fontSize: 13
  },
  footer: {
    color: '#419fff',
    fontSize: 14,
    marginTop: 20
  }
});

export default Dashboard;
