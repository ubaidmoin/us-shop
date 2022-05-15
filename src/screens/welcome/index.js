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
import { Dropdown, Button, MessageBox } from 'src/components';

const Welcome = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground
      style={styles.background}
      source={require('src/assets/images/background.png')}>
      <View style={styles.container}>
        <Image
          source={require('src/assets/images/logo-main.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.body}>
          <Dropdown label="Language" placeholder="Language" />
          <Dropdown label="Country" placeholder="Country" />
          <Dropdown label="Currency" placeholder="Currency" />
          <MessageBox
            type="warning"
            message="Payment methods are available based on your preffered currency & country."
          />
          <Button
            label="Update"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 100 : 60,
    paddingHorizontal: 40,
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  body: {
    paddingTop: 50,
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
    fontSize: 16,
    color: '#b5b5c3',
    fontWeight: '500'
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

export default Welcome;
