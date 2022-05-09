import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import TextButton from '../TextButton';

const CustomInput = ({
  label,
  placeholder,
  keyboardType = 'default',
  value,
  onChangeText,
  secureTextEntry = false,
  isPassword = false,
  forgotPasswordLabel = '',
  forgotPasswordOnPress = () => {}
}) => (
  <>
    {isPassword && (
      <View style={styles.row}>
        <Text style={[styles.label, { width: '50%' }]}>{label}</Text>
        <TextButton
          label={forgotPasswordLabel}
          onPress={forgotPasswordOnPress}
        />
      </View>
    )}
    {!isPassword && <Text style={styles.label}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#181c32',
    fontFamily: 'Poppins-Regular'
  },
  textInput: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  }
});

export default CustomInput;
