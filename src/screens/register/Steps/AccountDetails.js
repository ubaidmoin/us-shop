import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'src/components';

const AccountDetails = ({
  email = '',
  setEmail = () => {},
  password = '',
  setPassword = () => {},
  confirmPassword = '',
  setConfirmPassword = () => {}
}) => {
  const navigation = useNavigation();

  return (
    <>
      <TextInput
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={value => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <TextInput
        label="Confirm Password"
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
      />
    </>
  );
};

export default AccountDetails;
