import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextHighlight = props => {
  const { children, error } = props;
  return (
    <View style={!error ? styles.success : styles.error}>
      <Text {...props} style={!error ? styles.successText : styles.errorText}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  success: {
    backgroundColor: '#c9f7f5',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    maxWidth: '60%',
    marginLeft: 10
  },
  error: {
    backgroundColor: '#ffe2e4',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    maxWidth: '60%',
    marginLeft: 10
  },
  successText: {
    fontFamily: 'Poppins-Regular',
    color: '#1bc5bd',
    fontWeight: '500',
    fontSize: 14
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    color: '#f64e60',
    fontWeight: '500',
    fontSize: 14
  }
});

export default TextHighlight;
