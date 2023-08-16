import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useStateValue } from 'src/services/state/State';

const Price = ({ price = 0 }) => {
  const [{ currencyRate }] = useStateValue();
  return (
    <Text style={styles.price}>
      {`${price?.toFixed(2)} (${currencyRate?.currency_code})`}
    </Text>
  );
};

const styles = StyleSheet.create({
  price: {
    color: '#3699ff',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Price;
