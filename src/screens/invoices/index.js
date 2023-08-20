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
import {
  Header,
  Text,
  SearchBar,
  TextHighlight,
  ChangeCountry
} from 'src/components';
import { invoices } from 'src/services/api/ApiManager';
import { normalizeDate } from 'src/services/constants';
import { PAYMENT_STATUS } from 'src/services/enums';

const Invoices = () => {
  const navigation = useNavigation();
  const [{ accessToken, currencyRate, shop }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [invoicesList, setInvoices] = useState([]);

  const handleGetSupportTickets = async () => {
    setLoading(true);
    const response = await invoices(accessToken);
    console.log(response.data);
    if (response.status === 200) {
      setList(response?.data?.data);
      setInvoices(response?.data?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetSupportTickets();
  }, [shop]);

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setList(invoicesList);
    } else {
      let _data = list && list.length === 0 ? invoicesList : [...list];
      _data = _data.filter(
        item =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.created_at.toLowerCase().includes(search.toLowerCase()) ||
          item.amount?.toString().toLowerCase().includes(search.toLowerCase())
      );
      setInvoices(_data);
      setSearchParam(search);
    }
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
        <ChangeCountry />
        <SearchBar
          value={searchParam}
          onChangeText={value => handleSearch(value)}
        />
        <FlatList
          data={invoicesList}
          style={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.heading}>Date: </Text>
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.created_at)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Title: </Text>
                <Text style={styles.subHeading}>{item?.title}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>
                  {`Amount (${currencyRate?.currency_code}):`}{' '}
                </Text>
                <Text style={styles.subHeading}>{item?.amount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Attachment: </Text>
                <Text style={styles.cost}>
                  {item?.attachments ? 'Yes' : 'No'}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.heading}>Status: </Text>
                <TextHighlight error={PAYMENT_STATUS[item?.payment_status]}>
                  {PAYMENT_STATUS[item?.payment_status]}
                </TextHighlight>
              </View>
            </TouchableOpacity>
          )}
        />
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
  cost: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3699ff'
  }
});

export default Invoices;
