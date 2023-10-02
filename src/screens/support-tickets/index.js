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
  ChangeCountry,
  Title
} from 'src/components';
import { supportTicketsList } from 'src/services/api/ApiManager';
import { normalizeDate } from 'src/services/constants';
import { TICKET_STATUS } from 'src/services/enums';

const SupportTickets = () => {
  const navigation = useNavigation();
  const [{ accessToken, shop }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleGetSupportTickets = async () => {
    setLoading(true);
    const response = await supportTicketsList(accessToken);
    console.log(response.data);
    if (response.status === 200) {
      setList(response?.data?.data);
      setTickets(response?.data?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetSupportTickets();
  }, [shop]);

  const handleSearch = search => {
    if (search === '') {
      setSearchParam('');
      setTickets(tickets);
    } else {
      let _data = tickets && tickets.length === 0 ? tickets : [...list];
      _data = _data.filter(
        item =>
          item.id?.toString().toLowerCase().includes(search.toLowerCase()) ||
          item.subject.toLowerCase().includes(search.toLowerCase()) ||
          item.created_at.toLowerCase().includes(search.toLowerCase())
      );
      setTickets(_data);
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
          data={tickets}
          style={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('TicketDetails', {
                  id: item.id
                })
              }>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Ticket ID: </Text> */}
                <Title label="Ticket ID" />
                <Text style={styles.subHeading}>{item?.id}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Subject: </Text> */}
                <Title label="Subject" />
                <Text style={styles.subHeading}>{item?.subject}</Text>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Status: </Text> */}
                <Title label="Status" />
                <TextHighlight
                  error={TICKET_STATUS[item?.status] !== 'Resolved'}>
                  {TICKET_STATUS[item?.status]}
                </TextHighlight>
              </View>
              <View style={styles.row}>
                {/* <Text style={styles.heading}>Date: </Text> */}
                <Title label="Date" />
                <Text style={styles.subHeading}>
                  {normalizeDate(item?.created_at)}
                </Text>
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
    width: '60%',
    marginLeft: 10
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
    color: '#3699ff',
    marginLeft: 10
  }
});

export default SupportTickets;
