import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'src/components';

const AccountDetails = () => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput label="Password" placeholder="Password" secureTextEntry />
      <TextInput
        label="Confirm Password"
        placeholder="Confirm Password"
        secureTextEntry
      />
    </>
  );
};

export default AccountDetails;
