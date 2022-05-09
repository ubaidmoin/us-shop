import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RadioButton = ({
  checked = '',
  setChecked = () => {},
  items = [],
  label = ''
}) => {
  const handleCheckedChange = value => {
    setChecked(value);
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        {items &&
          items.map(item => (
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => handleCheckedChange(item.value)}>
              <Fontisto
                name={
                  checked === item.value
                    ? 'radio-btn-active'
                    : 'radio-btn-passive'
                }
                color="#3699ff"
                size={20}
              />
              <Text style={styles.radioButtonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#181c32',
    fontFamily: 'Poppins-Regular'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular'
  }
});

export default RadioButton;
