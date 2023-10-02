import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ label = '' }) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.heading, { width: '90%' }]}>{label}</Text>
      <Text style={styles.heading}>: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '38%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fontFamily: {
    fontFamily: 'Poppins-Regular'
  },
  heading: {
    fontSize: 14,
    fontWeight: '500'
  }
});

export default Title;
