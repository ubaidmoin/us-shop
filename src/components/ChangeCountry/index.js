import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { CountryPicker, Dropdown, Text } from '../';
import {
  getCountries,
  getShops,
  switchShop
} from 'src/services/api/ApiManager';
import { useStateValue } from 'src/services/state/State';
import { toTitleCase } from 'src/services/constants';
import { actions } from 'src/services/state/Reducer';

const ChangeCountry = ({}) => {
  const [{ accessToken, shop }, dispatch] = useStateValue();
  const [shops, setShops] = useState([]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleGetShops = async () => {
    const response = await getShops(accessToken);
    if (response.status === 200) {
      setShops(response?.data?.data);
      dispatch({
        type: actions.SET_SHOPS,
        payload: response?.data?.data
      });
      dispatch({
        type: actions.SET_SHOP,
        payload: response?.data?.current_country_code
      });
      setSelectedItem(response?.data?.current_country_code);
    }
  };

  const handleChangeCountry = async value => {
    const id = shops.find(item => item?.country?.code === value)?.country_id;
    const response = await switchShop(id, accessToken);
    if (response.status === 200) {
      dispatch({
        type: actions.SET_SHOP,
        payload: value
      });
      setSelectedItem(value);
      handleGetShops();
      fetchCountries(id);
      Alert.alert(toTitleCase(response?.data?.status), response?.data?.message);
    }
  };

  const fetchCountries = async id => {
    const res = await getCountries(accessToken);
    if (res && res.data) {
      dispatch({
        type: actions.SET_CURRENCY_RATE,
        payload: res?.data?.find(c => c.id === id)
      });
    }
  };

  useEffect(() => {
    handleGetShops();
  }, []);

  const currentShopName =
    shops?.find(item => item?.country?.code === shop)?.country?.name || '';

  return (
    <View style={{ zIndex: 20, width: '100%' }}>
      <CountryPicker
        label={`You are currently in ${currentShopName} store. You may switch the store to shop in different countries.`}
        items={shops.map(item => ({
          value: item?.country?.code,
          label: item?.country?.name
        }))}
        visible={showCountryPicker}
        setOpen={() => setShowCountryPicker(!showCountryPicker)}
        selectedItem={selectedItem}
        setSelectedItem={value => {
          dispatch({
            type: actions.SET_SHOP,
            payload: value()
          });
          handleChangeCountry(value());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    zIndex: 30,
    backfaceVisibility: 'hidden'
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10
  }
});

export default ChangeCountry;
