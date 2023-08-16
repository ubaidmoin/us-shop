import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from 'src/components';
import {
  getCountries,
  getShops,
  switchShop
} from 'src/services/api/ApiManager';
import { toTitleCase } from 'src/services/constants';
import { actions } from 'src/services/state/Reducer';
import { useStateValue } from 'src/services/state/State';

const CountryPicker = ({
  label = '',
  visible = false,
  setOpen = () => {},
  placeholder = '',
  items = [],
  selectedItem = {},
  setSelectedItem = () => {},
  style = {},
  searchable = false
}) => {
  const [{ accessToken, shop }, dispatch] = useStateValue();
  const [shops, setShops] = useState([]);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleGetShops = async () => {
    const response = await getShops(accessToken);
    if (response.status === 200) {
      setShops(response?.data?.data);
      dispatch({
        type: actions.SET_SHOP,
        payload: response?.data?.current_country_code
      });
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

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 10, width: '100%' }}>{label}</Text>
      <View style={styles.row}>
        <View style={{ width: '10%' }}>
          <CountryFlag
            isoCode={shop || ''}
            size={20}
            style={{
              borderRadius: 2
            }}
          />
        </View>
        <View style={{ width: '90%' }}>
          <DropDownPicker
            open={visible}
            value={selectedItem}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedItem}
            placeholder="Select Country"
            placeholderStyle={styles.placeholder}
            containerStyle={styles.dropdown}
            style={styles.border}
            dropDownContainerStyle={styles.container}
            listItemLabelStyle={styles.fontFamily}
            searchable={searchable}
            searchContainerStyle={styles.search}
            searchTextInputStyle={styles.search}
            selectedItemContainerStyle={styles.selected}
            selectedItemLabelStyle={styles.selected}
            showTickIcon={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Platform.OS === 'ios' ? '100%' : '97.5%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 13,
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
    backfaceVisibility: 'hidden',
    marginHorizontal: Platform.OS === 'ios' ? 0 : 5
  },
  placeholder: {
    fontSize: 15,
    color: '#c4c4c6',
    fontFamily: 'Poppins-Regular'
  },
  dropdown: {
    borderRadius: 13,
    width: '100%',
    fontFamily: 'Poppins-Regular'
  },
  border: {
    borderWidth: 0
  },
  container: {
    zIndex: 10,
    borderRadius: 13,
    width: '100%',
    fontFamily: 'Poppins-Regular',
    borderWidth: 0
  },
  search: {
    borderColor: '#1584F7',
    fontFamily: 'Poppins-Regular'
  },
  fontFamily: {
    fontFamily: 'Poppins-Regular'
  },
  selected: {
    backgroundColor: '#1584F7',
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    zIndex: 30,
    backfaceVisibility: 'hidden'
  }
});

export default CountryPicker;
