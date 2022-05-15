import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = ({ label = '' }) => <Text style={styles.label}>{label}</Text>;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#181c32',
    fontFamily: 'Poppins-Regular'
  }
});

export default Label;
