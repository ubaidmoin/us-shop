import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { TextInput, TextButton, Button } from 'src/components';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
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
        source={require('src/assets/images/logo-main.png')}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <View style={styles.body}>
        <TextInput
          label="Your Email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <Button label="Send Reset Email" />
        <Button
          fill={false}
          label="Cancel"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Image
        source={require('src/assets/images/feature.png')}
        style={styles.feature}
        resizeMode="contain"
      />
    </ScrollView>
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
    fontSize: 16,
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

export default ResetPassword;
