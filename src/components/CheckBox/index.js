import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = ({
  checked = false,
  setChecked = () => {},
  message = '',
  messageHighlight = ''
}) => {
  const navigation = useNavigation();
  const handleCheckedChange = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.checkbox} onPress={handleCheckedChange}>
      <MaterialCommunityIcons
        name={checked === true ? 'checkbox-marked' : 'checkbox-blank-outline'}
        color="#3699ff"
        size={25}
      />
      <View style={styles.container}>
        <Text style={styles.checkboxText}>{message}</Text>
        {!!messageHighlight && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TermsAndConditionsStackScreen')
            }>
            <Text style={styles.checkboxHighlightText}>{messageHighlight}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10
  },
  checkboxHighlightText: {
    fontSize: 14,
    color: '#3699ff',
    fontWeight: '300',
    fontFamily: 'Poppins-Regular'
  }
});

export default CheckBox;
