import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Dropdown, CheckBox } from 'src/components';
import { getCountries } from 'src/services/api/ApiManager';
import { useStateValue } from 'src/services/state/State';
import { actions } from 'src/services/state/Reducer';
import { countryList } from 'src/services/constants';

const MailingDetails = ({
  businessName = '',
  setBusinessName = () => {},
  address = '',
  setAddress = () => {},
  state = '',
  setState = () => {},
  city = '',
  setCity = () => {},
  postalCode = '',
  setPostalCode = () => {},
  countries = countryList || [],
  handleOpenCountry = () => {},
  isCountryVisible = false,
  selectedCountry = {},
  setSelectedCountry = () => {},
  agreeTerms = false,
  setAgreeTerms = () => {},
  message = 'I agree to the ',
  messageHighlight = 'terms & conditions'
}) => {
  return (
    <>
      <TextInput
        label="Business Name (if any)"
        placeholder=""
        value={businessName}
        onChangeText={value => setBusinessName(value)}
      />
      <TextInput
        label="Address"
        placeholder=""
        value={address}
        onChangeText={value => setAddress(value)}
      />
      <TextInput
        label="State"
        placeholder=""
        value={state}
        onChangeText={value => setState(value)}
      />
      <TextInput
        label="City"
        placeholder=""
        value={city}
        onChangeText={value => setCity(value)}
      />
      <TextInput
        label="Postal Code"
        placeholder=""
        keyboardType="number-pad"
        value={postalCode}
        onChangeText={value => setPostalCode(value)}
      />
      <Dropdown
        label="Country"
        placeholder="Country"
        items={countries?.map(item => ({
          label: item.name,
          value: item.name
        }))}
        selectedItem={selectedCountry}
        setSelectedItem={setSelectedCountry}
        setOpen={handleOpenCountry}
        visible={isCountryVisible}
        style={{
          zIndex: 10
        }}
      />
      <CheckBox
        message={message}
        messageHighlight={messageHighlight}
        checked={agreeTerms}
        setChecked={setAgreeTerms}
      />
    </>
  );
};

export default MailingDetails;
