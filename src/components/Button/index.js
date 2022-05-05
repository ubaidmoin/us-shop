import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress, fill = true }) => (
  <TouchableOpacity
    style={[styles.touchable, { backgroundColor: fill ? '#3699ff' : '#fff' }]}
    onPress={onPress}>
    <Text style={[styles.label, { color: !fill ? '#3699ff' : '#fff' }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  touchable: {
    backgroundColor: '#3699ff',
    borderColor: '#3699ff',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20
  }
});

export default Button;
