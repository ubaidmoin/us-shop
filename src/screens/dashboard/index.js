import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  Header,
  ChangeCountry,
  TextHighlight
} from 'src/components';
import { getCountries, getDashboardDetails } from 'src/services/api/ApiManager';
import { actions } from 'src/services/state/Reducer';
import {
  getDay,
  humanDifferenceDate,
  stateFreeAddress
} from 'src/services/constants';
import { TICKET_STATUS } from 'src/services/enums';

const Dashboard = () => {
  const navigation = useNavigation();
  const [{ currentUser, accessToken, shop, currencyRate, shops }, dispatch] =
    useStateValue();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [dashboardDetails, setDashboardDetails] = useState(null);

  const fetchCountries = async () => {
    const res = await getCountries(accessToken);
    if (res && res.data) {
      dispatch({
        type: actions.SET_CURRENCY_RATE,
        payload: res?.data?.find(
          c => c.id === parseInt(currentUser?.currency, 0)
        )
      });
      dispatch({
        type: actions.SET_COUNTRIES,
        payload: res?.data?.sort((a, b) => a.name.localeCompare(b.name))
      });
    }
  };

  const handleGetDashboardDetails = async () => {
    setLoading(true);
    const response = await getDashboardDetails(accessToken);
    if (response.status === 200) {
      setDashboardDetails(response?.data);
      setTickets(response?.data?.tickets);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetDashboardDetails();
  }, [shop]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const replaceSpanWithTextComponent = string => {
    const regex = /<span[^>]*>([^<]*)<\/span>/g;
    // replace span with Text component
    const replacedString = string.replace(regex, (match, group) => group);
    const arr = replacedString.split('$');
    const newArr = arr[1]?.split(' ');
    const amount = `$${newArr?.[0] || 0}`;
    newArr?.shift();
    const res = {
      preText: arr[0] || '',
      postText: newArr?.join(' ') || '',
      amount
    };
    return res;
  };

  const address = stateFreeAddress?.find(item => item.code === shop);
  const currentShopName =
    shops?.find(item => item?.country?.code === shop)?.country?.name || '';

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <ChangeCountry />
        <View style={styles.info}>
          <Text style={styles.heading}>{address?.title}</Text>
          <Text style={styles.text}>
            {`You can use the following details if you want to purchase the items from the ${
              currentShopName || 'United States'
            } & we will do the shipping for you.`}
          </Text>
          <Text style={styles.subHeading}>Name</Text>
          <Text style={styles.subText}>
            {(currentUser && currentUser?.name) || ''}
          </Text>
          <Text style={styles.subHeading}>Address Line 1</Text>
          <Text style={styles.subText}>
            {(address && address?.addressLine1) || ''}
          </Text>
          <Text style={styles.subHeading}>Address Line 2</Text>
          <Text style={styles.subText}>
            {(address && address?.addressLine2) || ''}
          </Text>
          <Text style={styles.subHeading}>City, State, Zip Code</Text>
          <Text style={styles.subText}>{`${(address && address?.city) || ''} ${
            (address && address?.state) || ''
          } ${(address && address?.zipCode) || ''}`}</Text>
          <Text style={styles.subHeading}>Country</Text>
          <Text style={styles.subText}>{`${address && address?.country}`}</Text>
          <Text style={styles.subHeading}>Phone</Text>
          <Text style={styles.subText}>{`${address && address?.phone}`}</Text>
          <Text style={[styles.heading, { marginTop: 10 }]}>
            {`Locker Number: ${
              (currentUser && currentUser?.locker_code) || ''
            }`}
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
              <Text style={styles.pendingText}>{`${
                dashboardDetails?.pending?.toFixed(2) || 0
              } ${currencyRate?.currency_code} Pending`}</Text>
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
              <Text style={styles.paidText}>{`${
                dashboardDetails?.paid?.toFixed(2) || 0
              } ${currencyRate?.currency_code} Paid`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.activites}>
          <Text style={[styles.heading, { color: '#000', marginBottom: 20 }]}>
            Recent Activites
          </Text>
          <FlatList
            data={dashboardDetails?.activities}
            style={styles.flatlist}
            nestedScrollEnabled
            renderItem={({ item, index }) => {
              const message = replaceSpanWithTextComponent(item?.description);
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'flex-start',
                    height: 50
                  }}>
                  <View style={{ width: '20%' }}>
                    <Text style={[styles.ticketHeading, { marginTop: 0 }]}>
                      {getDay(item?.created_at)}
                    </Text>
                  </View>
                  <Feather
                    name="circle"
                    size={20}
                    color={item?.type === 'danger' ? '#f64e60' : '#ffa800'}
                    style={{ width: '10%' }}
                  />
                  <View style={{ width: '70%' }}>
                    <Text style={{ color: '#3f4254' }}>
                      {message?.preText}{' '}
                      {message?.postText && (
                        <Text
                          style={{
                            color:
                              item?.type === 'danger' ? '#f64e60' : '#ffa800'
                          }}>
                          {message?.amount}
                        </Text>
                      )}
                      {' ' + message?.postText || ''}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
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
          {tickets?.length > 0 && (
            <FlatList
              data={tickets}
              style={styles.flatlist}
              nestedScrollEnabled
              renderItem={({ item, index }) => (
                <View style={styles.card}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    <View style={{ width: '60%' }}>
                      <Text style={styles.ticketHeading}>{item?.subject}</Text>
                      <Text style={styles.ticketSubHeading}>
                        {humanDifferenceDate(item?.created_at)}
                      </Text>
                    </View>
                    <TextHighlight
                      error={TICKET_STATUS[item?.status] !== 'Resolved'}>
                      {TICKET_STATUS[item?.status]}
                    </TextHighlight>
                  </View>
                </View>
              )}
            />
          )}
          {tickets?.length === 0 && (
            <Text style={styles.footer}>No tickets has been created yet.</Text>
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
    fontSize: 14,
    color: '#fff',
    fontWeight: '500'
  },
  subHeading: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginTop: 15
  },
  ticketHeading: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10
  },
  ticketSubHeading: {
    fontSize: 14,
    marginTop: 5
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
    minHeight: 100,
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
    minHeight: 100,
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
