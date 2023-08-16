import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  RadioButton,
  MessageBox,
  TextInput,
  CheckBox,
  Label,
  ImageBrowser
} from 'src/components';
import { taxAndDuty } from 'src/services/constants';

const TaxAndDuty = ({
  duties = [],
  handleCheckChange = () => {},
  packageValue = '',
  setPackageValue = () => {},
  shipmentDetails = '',
  setShipmentDetails = () => {},
  images = [],
  setImages = () => {}
}) => {
  return (
    <>
      <TextInput
        label="Selected Package Value (USD)"
        value={packageValue}
        onChangeText={value => setPackageValue(value)}
        keyboardType="number-pad"
      />
      <View style={styles.packages}>
        <Label label="Package Categories" />
        {taxAndDuty &&
          taxAndDuty.map((item, index) => (
            <CheckBox
              key={index}
              checked={item.selected}
              message={item.label}
              setChecked={value => handleCheckChange(value, index)}
            />
          ))}
      </View>
      <TextInput
        label="Shipment Details "
        placeholder="Please list the exact items in the shipment"
        multiline
        numberOfLines={5}
        value={shipmentDetails}
        onChangeText={value => setShipmentDetails(value)}
      />
      <ImageBrowser
        images={images}
        setImages={setImages}
        attachmentTitle="Purchase Invoice / Receipt"
        attachmentMessage="Please upload image file only less than 5 MB in size."
      />
    </>
  );
};

export default TaxAndDuty;

const styles = StyleSheet.create({
  packages: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 10
  }
});
