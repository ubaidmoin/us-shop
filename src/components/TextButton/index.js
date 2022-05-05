import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TextButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.touchable} onPress={onPress}>
    <Text style={[styles.label, { fontWeight: 'normal' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3699ff'
  },
  touchable: {
    marginLeft: 5
  }
});

export default TextButton;
