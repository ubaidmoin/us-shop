import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Dropdown, CheckBox } from 'src/components';

const MailingDetails = ({
  handleCloseCountry = () => {},
  countries = [],
  handleOpenCountry = () => {},
  isCountryVisible = false,
  selectedCountry = {},
  setSelectedCountry = () => {},
  agreeTerms = false,
  setAgreeTerms = () => {},
  message = 'I agree to the ',
  messageHighlight = 'terms & conditions'
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput label="Business Name (if any)" placeholder="" />
      <TextInput label="Address" placeholder="" />
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
      <CheckBox message={message} messageHighlight={messageHighlight} />
    </>
  );
};

export default MailingDetails;
