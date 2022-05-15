import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SecondaryButton = ({ label, customStyle = null, onPress }) => (
  <TouchableOpacity
    style={[
      styles.touchable,
      !!customStyle && {
        paddingVertical: customStyle.paddingVertical,
        paddingHorizontal: customStyle.paddingHorizontal
      },
      !!(typeof customStyle?.marginTop === 'number') && {
        marginTop: customStyle.marginTop
      }
    ]}
    onPress={onPress}>
    <Text
      style={[
        styles.label,
        !!customStyle?.fontSize && {
          fontSize: customStyle.fontSize
        }
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#399bff',
    fontFamily: 'Poppins-Regular'
  },
  touchable: {
    backgroundColor: '#e1f0ff',
    borderColor: '#e1f0ff',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10
  }
});

export default SecondaryButton;
