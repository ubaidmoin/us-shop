import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Label } from 'src/components';

const Dropdown = ({
  label = '',
  visible = false,
  setOpen = () => {},
  placeholder = '',
  items = [],
  selectedItem = {},
  setSelectedItem = () => {}
}) => {
  return (
    <>
      <Label label={label} />
      <DropDownPicker
        open={visible}
        value={selectedItem}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedItem}
        placeholder={placeholder}
        placeholderStyle={styles.placeholder}
        containerStyle={styles.dropdown}
        style={styles.border}
      />
    </>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 15,
    color: '#c4c4c6',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular'
  },
  dropdown: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 13,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular'
  },
  border: {
    borderWidth: 0
  }
});

export default Dropdown;
