import React from 'react';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { StyleSheet, Text } from 'react-native';

const AutoComplete = ({
  label = '',
  setSelectedItem = () => {},
  items = [],
  selectedItem: {},
  initialValue = '0',
  placeholder = ''
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: initialValue }}
        onSelectItem={setSelectedItem}
        dataSet={items}
        inputContainerStyle={styles.autoComplete}
        textInputProps={{
          placeholder: placeholder,
          style: styles.itemStyle
        }}
      />
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
  autoComplete: {
    padding: 10,
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
    elevation: 5
  },
  itemStyle: {
    fontSize: 15,
    color: '#c4c4c6',
    marginLeft: -5
  }
});

export default AutoComplete;
