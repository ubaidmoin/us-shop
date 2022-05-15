import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MessageBox = ({ message = '', type = 'warning' }) => {
  const container =
    type === 'success'
      ? styles.success
      : type === 'warning'
      ? styles.warning
      : type === 'info'
      ? styles.info
      : styles.danger;
  return (
    <View style={container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  success: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAFCFA'
  },
  warning: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF4DE'
  },
  info: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7DAFF'
  },
  danger: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FED5D9'
  },
  message: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  }
});

export default MessageBox;
