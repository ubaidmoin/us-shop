import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Label } from 'src/components';

const RadioButton = ({
  checked = '',
  setChecked = () => {},
  items = [],
  label = '',
  helperMessage = ''
}) => {
  const handleCheckedChange = value => {
    setChecked(value);
  };

  return (
    <>
      <Label label={label} />
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
      {!!helperMessage && <Text style={styles.helper}>{helperMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 5
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular'
  },
  helper: {
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
    color: '#b5b5c3',
    fontFamily: 'Poppins-Regular'
  }
});

export default RadioButton;
