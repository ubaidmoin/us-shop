import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({
  label,
  customStyle = null,
  onPress,
  fill = true,
  danger = false
}) => (
  <TouchableOpacity
    style={[
      styles.touchable,
      !!customStyle && {
        paddingVertical: customStyle.paddingVertical,
        paddingHorizontal: customStyle.paddingHorizontal
      },
      !!(typeof customStyle?.marginTop === 'number') && {
        marginTop: customStyle.marginTop
      },
      { backgroundColor: fill ? '#3699ff' : '#fff' },
      { borderColor: danger ? '#f64e60' : '#3699ff' }
    ]}
    onPress={onPress}>
    <Text
      style={[
        styles.label,
        !!customStyle?.fontSize && {
          fontSize: customStyle.fontSize
        },
        { color: danger ? '#f64e60' : !fill ? '#3699ff' : '#fff' }
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Poppins-Regular'
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
