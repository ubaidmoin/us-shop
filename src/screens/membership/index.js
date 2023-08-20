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
  MembershipCard
} from 'src/components';
import { supportTicketsList } from 'src/services/api/ApiManager';
import { normalizeDate } from 'src/services/constants';
import { TICKET_STATUS } from 'src/services/enums';

const Membership = () => {
  const navigation = useNavigation();
  const [{ accessToken, currentUser }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [tickets, setTickets] = useState([]);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center' }}>
        <ChangeCountry />
        <View style={{ marginTop: 20 }}>
          <MembershipCard
            isCurrent={currentUser?.membership === '1'}
            isFree
            isUpgradeable={currentUser?.membership !== '1'}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MembershipCard
            name="Gold"
            price="$50 /yearly or Spend $2000+"
            freeStorage="40"
            storageFee={0.5}
            photoRequestFee="Free"
            boxInspectionFee="Free"
            returningItemFee="Free"
            sellerTrackingNumberRequest="Free"
            repackingFee="$5"
            advacingPackingFee="$15"
            delicateFee="$40"
            isUpgradeable={currentUser?.membership !== '2'}
            isCurrent={currentUser?.membership === '2'}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <MembershipCard
            name="Platinum"
            price="$80 /yearly or Spend $5000+"
            freeStorage="40"
            storageFee={0.1}
            photoRequestFee="Free"
            boxInspectionFee="Free"
            returningItemFee="Free"
            sellerTrackingNumberRequest="Free"
            repackingFee="Free"
            advacingPackingFee="Free"
            delicateFee="Free"
            isUpgradeable={currentUser?.membership !== '3'}
            isCurrent={currentUser?.membership === '3'}
          />
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
    backgroundColor: '#e7e9f0',
    paddingBottom: 50
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

export default Membership;
