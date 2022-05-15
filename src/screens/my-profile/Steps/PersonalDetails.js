import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, RadioButton, AutoComplete } from 'src/components';

const PersonalDetails = ({
  gender = '',
  handleGenderChange = () => {},
  radioOptions = [],
  countries = [],
  selectedCountry = {},
  setSelectedCountry = () => {}
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
      <AutoComplete
        label="Country Code"
        placeholder="Country Code"
        items={countries}
        selectedItem={selectedCountry}
        setSelectedItem={setSelectedCountry}
      />
      <TextInput label="Phone Number" placeholder="Phone Number" />
    </>
  );
};

export default PersonalDetails;
