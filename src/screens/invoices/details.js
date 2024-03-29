import React, { useState, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import {
  Button,
  Text,
  SearchBar,
  TextHighlight,
  Header,
  Title
} from 'src/components';
import {
  viewBuyForMe,
  viewInvoice,
  viewVipServices
} from 'src/services/api/ApiManager';
import { PACKAGE_STATUS, PAYMENT_STATUS } from 'src/services/enums';
import moment from 'moment';
import { getPriceByRate, normalizeDate } from 'src/services/constants';

const InvoicesDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route?.params?.id;

  const [{ accessToken, currencyRate }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  const handleGetBookVIPService = async () => {
    setLoading(true);
    const response = await viewInvoice(accessToken, id);
    console.log(response?.data);
    if (response.status === 200) {
      setItem(response?.data?.order);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetBookVIPService();
  }, []);

  return (
    <>
      <Header isStack />
      <View style={styles.container}>
        <View style={[styles.card, { marginBottom: 10 }]}>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Date: </Text> */}
            <Title label="Date" />
            <Text style={styles.subHeading}>
              {normalizeDate(item?.created_at)}
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Title: </Text> */}
            <Title label="Title" />
            <Text style={styles.subHeading}>{item?.title}</Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>
              {`Amount (${currencyRate?.currency_code}):`}{' '}
            </Text> */}
            <Title label={`Amount (${currencyRate?.currency_code}):`} />
            <Text style={styles.subHeading}>{item?.amount}</Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Attachment: </Text> */}
            <Title label="Attachment" />
            <Text style={styles.cost}>{item?.attachments ? 'Yes' : 'No'}</Text>
          </View>
          <View style={styles.row}>
            {/* <Text style={styles.heading}>Status: </Text> */}
            <Title label="Status" />
            <TextHighlight error={PAYMENT_STATUS[item?.payment_status]}>
              {PAYMENT_STATUS[item?.payment_status]}
            </TextHighlight>
          </View>
        </View>
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
    width: '60%',
    marginLeft: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  col: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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

export default InvoicesDetails;
