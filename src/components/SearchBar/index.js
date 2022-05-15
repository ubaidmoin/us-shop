import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({
  placeholder = 'Search...',
  keyboardType = 'default',
  value,
  onChangeText
}) => (
  <View style={styles.row}>
    <Feather name="search" color="#b5b5c3" size={20} />
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  textInput: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10
  }
});

export default SearchBar;
