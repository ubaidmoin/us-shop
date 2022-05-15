import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { TextInput, Header, Button, Text } from 'src/components';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Image
          source={require('../../assets/images/logo-main.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.body}>
          <TextInput
            label="Current Password"
            placeholder="Current Password"
            secureTextEntry
            isPassword
          />
          <TextInput
            label="New Password"
            placeholder="New Password"
            secureTextEntry
            isPassword
          />
          <TextInput
            label="Confirm New Password"
            placeholder="Confirm New Password"
            secureTextEntry
            isPassword
          />
          <Button label="Update Password" onPress={() => navigation.goBack()} />
          <Button
            label="Cancel"
            onPress={() => navigation.goBack()}
            fill={false}
            danger
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
    minWidth: 256,
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
