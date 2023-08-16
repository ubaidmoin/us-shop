import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Label } from 'src/components';

const Dropdown = ({
  label = '',
  visible = false,
  setOpen = () => {},
  placeholder = '',
  items = [],
  selectedItem = {},
  setSelectedItem = () => {},
  style = {},
  searchable = false
}) => {
  return (
    <View style={style}>
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
        dropDownContainerStyle={styles.container}
        listItemLabelStyle={styles.fontFamily}
        searchable={searchable}
        searchContainerStyle={styles.search}
        searchTextInputStyle={styles.search}
        selectedItemContainerStyle={styles.selected}
        selectedItemLabelStyle={styles.selected}
        showTickIcon={false}
        scrollViewProps={{
          nestedScrollEnabled: true
        }}
      />
    </View>
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
    width: Platform.OS === 'ios' ? '100%' : '97.5%',
    marginBottom: 15,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: Platform.OS === 'ios' ? 0 : 5
  },
  border: {
    borderWidth: 0
  },
  container: {
    zIndex: 10,
    borderRadius: 13,
    width: '100%',
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 5,
    fontFamily: 'Poppins-Regular',
    borderWidth: 0,
    padding: 5
  },
  search: {
    borderColor: '#1584F7',
    fontFamily: 'Poppins-Regular'
  },
  fontFamily: {
    fontFamily: 'Poppins-Regular'
  },
  selected: {
    backgroundColor: '#1584F7',
    color: '#fff'
  }
});

export default Dropdown;
