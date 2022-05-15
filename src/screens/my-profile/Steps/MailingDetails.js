import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Dropdown, CheckBox } from 'src/components';

const MailingDetails = ({
  handleCloseCountry = () => {},
  countries = [],
  handleOpenCountry = () => {},
  isCountryVisible = false,
  selectedCountry = {},
  setSelectedCountry = () => {}
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput label="Business Name (if any)" placeholder="" />
      <TextInput label="Street Address" placeholder="" />
      <TextInput label="State" placeholder="" />
      <TextInput label="City" placeholder="" />
      <TextInput label="Postal Code" placeholder="" keyboardType="number-pad" />
      <Dropdown
        label="Country"
        placeholder="Country"
        items={countries}
        selectedItem={selectedCountry}
        setSelectedItem={setSelectedCountry}
        setOpen={handleOpenCountry}
        visible={isCountryVisible}
      />
    </>
  );
};

export default MailingDetails;
