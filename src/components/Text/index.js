import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = props => {
  const { children } = props;
  return (
    <Text {...props} style={[props.style, styles.fontFamily]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Poppins-Regular'
  }
});

export default CustomText;
