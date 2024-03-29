import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEYS = {
  USER_INFO: 'USER_INFO'
};

export const removeUserInfo = async () => {
  try {
    await AsyncStorage.removeItem(KEYS.USER_INFO);
  } catch (err) {
    return null;
  }
};

export const setUserInfo = async userDetails => {
  try {
    await AsyncStorage.setItem(KEYS.USER_INFO, JSON.stringify(userDetails));
  } catch (err) {
    return null;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await AsyncStorage.getItem(KEYS.USER_INFO);
    if (response) {
      return JSON.parse(response);
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const formatPhoneNumber = phoneNumberString => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};
