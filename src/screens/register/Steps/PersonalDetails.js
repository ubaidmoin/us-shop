import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, RadioButton, Dropdown } from 'src/components';
import { countryCodes } from 'src/services/constants';
const PersonalDetails = ({
  gender = '',
  handleGenderChange = () => {},
  radioOptions = [],
  countries = [],
  selectedCountry = {},
  setSelectedCountry = () => {},
  openCountry = false,
  setOpenCountry = () => {}
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput label="Full Name" placeholder="Full Name" />
      <RadioButton
        label="Gender"
        checked={gender}
        setChecked={handleGenderChange}
        items={radioOptions}
      />
      <Dropdown
        label="Country"
        placeholder="Country"
        visible={openCountry}
        setOpen={() => setOpenCountry(!openCountry)}
        items={countryCodes}
        selectedItem={selectedCountry}
        setSelectedItem={value => setSelectedCountry(value)}
        style={{ zIndex: 10 }}
        searchable
      />
      <TextInput label="Phone Number" placeholder="Phone Number" />
    </>
  );
};

export default PersonalDetails;
