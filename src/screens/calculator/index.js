import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Alert,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Button, TextInput, Dropdown, Text } from 'src/components';
import { calculatorResult, getCountries } from 'src/services/api/ApiManager';
import {
  SHIPPING_LENGTH_UNIT_ENUM,
  SHIPPING_TYPE_ENUM,
  SHIPPING_UNIT_ENUM
} from 'src/services/enums';
import { getPriceByRate } from 'src/services/constants';
import { actions } from 'react-native-pell-rich-editor';

const Calculator = () => {
  const navigation = useNavigation();
  const [{ currencyRate, accessToken, currentUser, countries }, dispatch] =
    useStateValue();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    weight: '',
    length: '',
    width: '',
    height: ''
  });
  const [openCountry, setOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [shippingCountry, setShippingCountry] = useState(null);
  const [openShippingCountry, setOpenShippingCountry] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [openLengthUnit, setOpenLengthUnit] = useState(false);
  const [selectedLengthUnit, setSelectedLengthUnit] = useState(null);
  const handleStateChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

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
    if (countries?.length === 0) {
      fetchCountries();
    }
  }, []);

  const handleCalculate = async () => {
    setLoading(true);
    console.log(
      state,
      shippingCountry,
      selectedCountry,
      selectedUnit,
      selectedLengthUnit
    );
    const response = await calculatorResult(accessToken, {
      shop_country: 18,
      shipment_country: selectedCountry,
      shipment_type: shippingCountry,
      weight: parseInt(state?.weight, 0),
      weight_type: selectedUnit,
      length: parseInt(state?.length, 0),
      width: parseInt(state?.width, 0),
      height: parseInt(state?.height, 0),
      size_type: selectedLengthUnit
    });
    console.log(response);
    if (response.status === 200) {
      setResult(response?.data);
    } else {
      console.log(
        SHIPPING_TYPE_ENUM,
        shippingCountry,
        SHIPPING_TYPE_ENUM?.find(item => item.value === shippingCountry)?.label
      );
      Alert.alert(
        'Sorry!',
        `Unfortunately, we do not provide ${
          SHIPPING_TYPE_ENUM?.find(item => item.value === shippingCountry)
            ?.label
        } to ${countries?.find(item => item?.id === selectedCountry)?.name}..`
      );
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.body}>
          <View style={styles.estimatedContainer}>
            <Text style={styles.estimatedText}>Estimated Cost:</Text>
            {result &&
              result?.cost &&
              result?.cost?.length > 0 &&
              result?.cost?.map(item => (
                <View style={styles.row}>
                  <Text style={styles.subHeading}>{item?.name}</Text>
                  <View style={styles.costContainer}>
                    <Text style={styles.cost}>{`${
                      currencyRate?.currency_code
                    } ${getPriceByRate(
                      item?.cost,
                      currencyRate?.currency_rate
                    ).toFixed(2)}`}</Text>
                  </View>
                </View>
              ))}
          </View>
          <Dropdown
            label="Country"
            placeholder="Country"
            items={countries?.map(item => ({
              value: item?.id,
              label: item?.name
            }))}
            visible={openCountry}
            setOpen={() => setOpenCountry(!openCountry)}
            selectedItem={selectedCountry}
            setSelectedItem={value => setSelectedCountry(value)}
            style={{ zIndex: 2000 }}
          />
          <Dropdown
            label="Shipping Type"
            placeholder="Shipping Type"
            visible={openShippingCountry}
            setOpen={() => setOpenShippingCountry(!openShippingCountry)}
            items={SHIPPING_TYPE_ENUM}
            selectedItem={shippingCountry}
            setSelectedItem={value => setShippingCountry(value)}
            style={{ zIndex: 1900 }}
          />
          <View style={styles.row}>
            <View style={styles.column}>
              <TextInput
                label="Weight"
                placeholder=""
                value={state.weight}
                onChangeText={value => handleStateChange('weight', value)}
                keyboardType="number-pad"
              />
            </View>
            <View style={[styles.column, { zIndex: 20 }]}>
              <Dropdown
                label="Type"
                placeholder="Type"
                visible={openUnit}
                setOpen={() => setOpenUnit(!openUnit)}
                items={SHIPPING_UNIT_ENUM}
                selectedItem={selectedUnit}
                setSelectedItem={value => setSelectedUnit(value)}
                style={{ zIndex: 20 }}
              />
            </View>
          </View>
          <View style={[styles.row, { zIndex: -10 }]}>
            <View style={styles.column}>
              <TextInput
                label="Length"
                placeholder=""
                value={state.length}
                onChangeText={value => handleStateChange('length', value)}
                keyboardType="number-pad"
              />
            </View>
            <View style={[styles.column, { zIndex: 1 }]}>
              <TextInput
                label="Width"
                placeholder=""
                value={state.width}
                onChangeText={value => handleStateChange('width', value)}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TextInput
                label="Height"
                placeholder=""
                value={state.height}
                onChangeText={value => handleStateChange('height', value)}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.column}>
              <Dropdown
                label="Type"
                placeholder="Type"
                visible={openLengthUnit}
                setOpen={() => setOpenLengthUnit(!openLengthUnit)}
                items={SHIPPING_LENGTH_UNIT_ENUM}
                selectedItem={selectedLengthUnit}
                setSelectedItem={value => setSelectedLengthUnit(value)}
                style={{ zIndex: 20 }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Button
              loading={loading}
              label="Calculate"
              onPress={handleCalculate}
            />
          </View>
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
    backgroundColor: '#fff',
    zIndex: 1
  },
  contentContainer: {
    alignItems: 'center'
  },
  body: {
    paddingTop: 20,
    width: '100%',
    zIndex: 0
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
    width: '35%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    marginTop: 10
    // zIndex: 1
  },
  left: {
    width: '58%'
  },
  right: {
    width: '40%'
  },
  column: {
    width: '49%',
    zIndex: 1
  },
  estimatedContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    padding: 20
  },
  estimatedText: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  costContainer: {
    backgroundColor: '#1bc5bd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    alignItems: 'center'
  },
  cost: {
    fontSize: 14,
    color: '#fff'
  }
});

export default Calculator;
