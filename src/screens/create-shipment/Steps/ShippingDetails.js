import React from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton, Dropdown, TextInput } from 'src/components';
import { selfPickup } from 'src/services/Settings';

const ShippingDetails = ({ pickUp = '', handleRadioChange = () => {} }) => {
  return (
    <>
      <TextInput label="Shipping Type" placeholder="" />
      <TextInput label="Street Address" placeholder="" />
      <TextInput label="City" placeholder="" />
      <TextInput label="Postal Code" placeholder="" />
      <TextInput label="State" placeholder="" />
      <Dropdown label="Country" placeholder="Country" />
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
