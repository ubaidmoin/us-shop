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
import { TextInput, TextButton, Button, Text } from 'src/components';
import { login } from 'src/services/api/ApiManager';
import { setUserInfo } from 'src/services/DataManager';
import { actions } from 'src/services/state/Reducer';

const Login = () => {
  const navigation = useNavigation();
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (email === '') {
      alert('Please enter email');
    } else if (password === '') {
      alert('Please enter password');
    } else {
      setLoading(true);
      const res = await login({ email, password });
      console.log(res);
      if (res && res.data) {
        const { welcome_tour } = res.data;
        await setUserInfo(res.data);
        dispatch({
          type: actions.SET_CURRENT_USER,
          payload: res.data
        });
        dispatch({
          type: actions.SET_ACCESS_TOKEN,
          payload: res.data.api_token
        });
        // if (welcome_tour) {
        //   navigation.navigate('Welcome');
        // } else {
        navigation.navigate('Dashboard');
        // }
      } else {
        alert('Invalid email or password');
      }
      setLoading(false);
    }
  };

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
      <View style={styles.body}>
        <TextInput
          label="Your Email"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={value => setEmail(value)}
          autoCorrect={false}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
          isPassword
          forgotPasswordLabel="Forgot Password?"
          forgotPasswordOnPress={() => navigation.navigate('ResetPassword')}
          autoCorrect={false}
        />
        <Button loading={loading} label="Sign In" onPress={handleSubmit} />
        <View style={styles.footer}>
          <Text style={styles.subHeading}>Don't have an account yet?</Text>
          <TextButton
            label="Sign Up Now"
            disabled={loading}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
      <Image
        source={require('../../assets/images/feature.png')}
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

export default Login;
