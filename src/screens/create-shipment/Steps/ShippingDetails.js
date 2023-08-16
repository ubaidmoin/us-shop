import React from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton, Dropdown, TextInput } from 'src/components';
import { selfPickup } from 'src/services/constants';
import { SHIPPING_TYPE_ENUM } from 'src/services/enums';

const ShippingDetails = ({
  pickUp = '',
  handleRadioChange = () => {},
  selectedCountry = '',
  setSelectedCountry = () => {},
  openShippingCountry = '',
  setOpenShippingCountry = () => {},
  shippingCountry = '',
  setShippingCountry = () => {},
  address = '',
  setAddress = () => {},
  city = '',
  setCity = () => {},
  postalCode = '',
  setPostalCode = () => {},
  state = '',
  setState = () => {},
  countries = [],
  openCountry = '',
  setOpenCountry = () => {}
}) => {
  return (
    <>
      <Dropdown
        label="Shipping Type"
        placeholder="Shipping Type"
        visible={openShippingCountry}
        setOpen={() => setOpenShippingCountry(!openShippingCountry)}
        items={SHIPPING_TYPE_ENUM}
        selectedItem={shippingCountry}
        setSelectedItem={value => setShippingCountry(value)}
        style={{ zIndex: 8 }}
      />
      <TextInput
        label="Street Address"
        placeholder=""
        value={address}
        onChangeText={value => setAddress(value)}
      />
      <TextInput
        label="City"
        placeholder=""
        value={city}
        onChangeText={value => setCity(value)}
      />
      <TextInput
        label="Postal Code"
        value={postalCode}
        onChangeText={value => setPostalCode(value)}
        keyboardType="number-pad"
        placeholder=""
      />
      <TextInput
        label="State"
        value={state}
        onChangeText={value => setState(value)}
        placeholder=""
      />
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
        style={{ zIndex: 10 }}
      />
      <RadioButton
        label="Self-pickup from our warehouse"
        checked={pickUp}
        setChecked={handleRadioChange}
        items={selfPickup}
      />
    </>
  );
};

export default ShippingDetails;

const styles = StyleSheet.create({
  packages: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10
  }
});
