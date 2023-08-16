import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, RadioButton, Dropdown } from 'src/components';
import { useStateValue } from 'src/services/state/State';

const PersonalDetails = ({
  name = '',
  setName = () => {},
  gender = '',
  handleGenderChange = () => {},
  radioOptions = [],
  selectedCountry = {},
  setSelectedCountry = () => {},
  phone = '',
  setPhone = () => {},
  openCountry = false,
  setOpenCountry = () => {}
}) => {
  const navigation = useNavigation();
  const [{ countries }] = useStateValue();

  return (
    <>
      <TextInput
        label="Full Name"
        placeholder="Full Name"
        value={name}
        onChangeText={value => setName(value)}
      />
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
        items={countries.map(c => ({
          label: `${c.name} (+${c.tel_code})`,
          value: c.tel_code
        }))}
        selectedItem={selectedCountry}
        setSelectedItem={value => setSelectedCountry(value)}
        style={{ zIndex: 10 }}
        searchable
      />
      <TextInput
        label="Phone Number"
        placeholder="Phone Number"
        value={phone}
        onChangeText={value => setPhone(value)}
      />
    </>
  );
};

export default PersonalDetails;
