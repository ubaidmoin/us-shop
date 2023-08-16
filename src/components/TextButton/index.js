import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TextButton = ({ label, onPress, disabled = false }) => (
  <TouchableOpacity
    style={styles.touchable}
    disabled={disabled}
    onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 10,
    color: '#3699ff',
    fontFamily: 'Poppins-Regular'
  },
  touchable: {
    marginLeft: 5
  }
});

export default TextButton;
