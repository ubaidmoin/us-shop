import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { TextInput, Header, Button, Text } from 'src/components';
import { updatePassword } from 'src/services/api/ApiManager';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [{ accessToken }, dispatch] = useStateValue();
  const [cPassword, setCPassword] = useState('');
  const [nPassword, setNPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (cPassword === '') {
      alert('Please enter current password');
    } else if (nPassword === '') {
      alert('Please enter new password');
    } else if (confirmPassword === '') {
      alert('Please enter confirm password');
    } else if (nPassword !== confirmPassword) {
      Alert.alert(
        'Password mismatch',
        'New password and confirm password does not match'
      );
    } else {
      setLoading(true);
      const data = {
        cpassword: cPassword,
        npassword: nPassword,
        confirmpassword: confirmPassword,
        token: accessToken
      };
      const res = await updatePassword(data);
      if (res && res.data && res.data.status === 'success') {
        alert(res?.data?.message);
        navigation.goBack();
      } else {
        alert(res?.data?.message);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logo}>
          <ImageBackground
            source={require('../../assets/images/logo-main.png')}
            style={{ flex: 1, width: '100%', resizeMode: 'contain' }}
          />
        </View>
        {/* <Image
          source={require('../../assets/images/logo-main.png')}
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <View style={styles.body}>
          <TextInput
            label="Current Password"
            placeholder="Current Password"
            secureTextEntry
            isPassword
            value={cPassword}
            onChangeText={value => setCPassword(value)}
          />
          <TextInput
            label="New Password"
            placeholder="New Password"
            secureTextEntry
            isPassword
            value={nPassword}
            onChangeText={value => setNPassword(value)}
          />
          <TextInput
            label="Confirm New Password"
            placeholder="Confirm New Password"
            secureTextEntry
            isPassword
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
          />
          <Button
            loading={loading}
            label="Update Password"
            onPress={handleSubmit}
          />
          <Button
            label="Cancel"
            onPress={() => navigation.goBack()}
            fill={false}
            danger
            disabled={loading}
          />
        </View>
        <Image
          source={require('../../assets/images/feature.png')}
          style={styles.feature}
          resizeMode="contain"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'ios' ? 70 : 40,
    paddingHorizontal: 40
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    paddingTop: 60,
    width: '100%'
  },
  logo: {
    width: 256,
    height: 65
  },
  footer: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
    marginVertical: 10
  },
  subHeading: {
    fontSize: 15,
    color: '#b5b5c3',
    fontWeight: '500'
  },
  feature: {
    height: 300,
    width: '100%',
    backgroundColor: '#fff'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-start'
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end'
  }
});

export default ChangePassword;
