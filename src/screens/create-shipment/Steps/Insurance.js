import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, MessageBox, TextInput } from 'src/components';
import { insurance } from 'src/services/Settings';

const Insurance = ({
  selectedInsurance = -1,
  handleRadioChange = () => {},
  _package = '',
  setPackage = () => {}
}) => {
  return (
    <>
      <RadioButton
        label="Would you like to have insurance coverage?"
        checked={selectedInsurance}
        setChecked={handleRadioChange}
        items={insurance}
      />
      {selectedInsurance === 0 && (
        <TextInput
          label="Selected Package Value (USD)"
          value={_package}
          onChangeText={value => setPackage(value)}
        />
      )}
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
