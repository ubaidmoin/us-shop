import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, MessageBox, TextInput } from 'src/components';
import { insurance } from 'src/services/constants';

const Insurance = ({ selectedInsurance = 0, handleRadioChange = () => {} }) => {
  return (
    <>
      <RadioButton
        label="Would you like to have insurance coverage?"
        checked={selectedInsurance}
        setChecked={handleRadioChange}
        items={insurance}
      />
      <MessageBox
        message="uShopUS provides insurance coverage to help offer you financial protection against all risks of physical loss or damage of goods/items during transit from uShopUS USA Warehouse to uShopUS Malaysia Warehouse."
        type="success"
      />
    </>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  packages: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10
  }
});
