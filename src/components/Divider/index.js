import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({}) => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 0,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ebedf3'
  }
});

export default Divider;
