import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Dropdown } from 'src/components';

const MailingDetails = ({
  handleCloseCountry = () => {},
  handleOpenCountry = () => {},
  isCountryVisible = false,
  selectedCountry = {},
  setSelectedCountry = () => {},
  company = '',
  setCompany = () => {},
  streetAddress = '',
  setStreetAddress = () => {},
  state = '',
  setState = () => {},
  city = '',
  setCity = () => {},
  postalCode = '',
  setPostalCode = () => {},
  openCountry = false,
  setOpenCountry = () => {},
  countries = []
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput
        label="Business Name (if any)"
        placeholder=""
        value={company}
        onChangeText={value => setCompany(value)}
      />
      <TextInput
        label="Street Address"
        placeholder=""
        value={streetAddress}
        onChangeText={value => setStreetAddress(value)}
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
        visible={openCountry}
        setOpen={() => setOpenCountry(!openCountry)}
        items={countries?.map(item => ({
          value: item?.id,
          label: item?.name
        }))}
        selectedItem={selectedCountry}
        setSelectedItem={value => setSelectedCountry(value)}
        style={{ zIndex: 10 }}
        searchable
      />
    </>
  );
};

export default MailingDetails;
