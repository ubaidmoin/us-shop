import React from 'react';
import { TextInput, StyleSheet, Text, View, Platform } from 'react-native';
import TextButton from '../TextButton';
import { Label } from 'src/components';

const CustomInput = ({
  label,
  placeholder,
  keyboardType = 'default',
  value,
  onChangeText,
  secureTextEntry = false,
  isPassword = false,
  forgotPasswordLabel = '',
  forgotPasswordOnPress = () => {},
  multiline = false,
  numberOfLines = 1,
  helperMessage = '',
  autoCapitalize = 'words',
  style = {},
  autoCorrect = true
}) => (
  <>
    {isPassword && (
      <View style={[styles.row, style && style]}>
        <Text style={[styles.label, { width: '50%' }]}>{label}</Text>
        <TextButton
          label={forgotPasswordLabel}
          onPress={forgotPasswordOnPress}
        />
      </View>
    )}
    {!isPassword && <Label label={label} />}
    <TextInput
      placeholder={placeholder}
      style={multiline ? styles.textarea : styles.textInput}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
    />
    {!!helperMessage && <Text style={styles.helper}>{helperMessage}</Text>}
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
    width: Platform.OS === 'ios' ? '100%' : '97.5%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: Platform.OS === 'ios' ? 0 : 5
  },
  textarea: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: Platform.OS === 'ios' ? '100%' : '97.5%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
    height: 100,
    marginHorizontal: Platform.OS === 'ios' ? 0 : 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  helper: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#b5b5c3',
    fontFamily: 'Poppins-Regular'
  }
});

export default CustomInput;
