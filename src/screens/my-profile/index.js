import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Header, Button, Text } from 'src/components';
import { PersonalDetails, MailingDetails } from './Steps';

const genders = [
  { label: 'Male', value: 'm' },
  { label: 'Female', value: 'f' }
];

const MyProfile = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

  const handleNext = () => setActive(active + 1);
  const handlePrevious = () => setActive(active - 1);

  const handleSubmit = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Image
          source={require('src/assets/images/logo-main.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={styles.step}>
              <View
                style={
                  active === 0 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 0 ? styles.stepTextActive : styles.stepText
                  }>
                  1
                </Text>
              </View>
              <Text style={styles.stepTitle}>Personal Details</Text>
            </View>
            <View style={styles.step}>
              <View
                style={
                  active === 1 ? styles.stepNumberActive : styles.stepNumber
                }>
                <Text
                  style={
                    active === 1 ? styles.stepTextActive : styles.stepText
                  }>
                  2
                </Text>
              </View>
              <Text style={styles.stepTitle}>Mailing Address</Text>
            </View>
          </View>
          {active === 0 ? (
            <PersonalDetails radioOptions={genders} />
          ) : (
            <MailingDetails />
          )}
          <Button
            label={active === 2 ? 'Update' : 'Next'}
            onPress={active === 2 ? handleSubmit : handleNext}
          />
        </View>
        <Image
          source={require('src/assets/images/feature.png')}
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
    paddingTop: 30,
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  step: {
    width: '33.33%',
    alignItems: 'center'
  },
  stepNumber: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f3f6f9'
  },
  stepNumberActive: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#c9f7f5'
  },
  stepText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  stepTextActive: {
    fontWeight: '500',
    fontSize: 16,
    color: '#1bc5bd'
  },
  stepTitle: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
});

export default MyProfile;
