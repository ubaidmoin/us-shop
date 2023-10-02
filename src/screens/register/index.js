import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { TextButton, Button, Text } from 'src/components';
import { AccountDetails, PersonalDetails, MailingDetails } from './Steps';
import { countryList } from 'src/services/constants';
import { register } from 'src/services/api/ApiManager';

const genders = [
  { label: 'Male', value: 'm' },
  { label: 'Female', value: 'f' }
];

const Register = () => {
  const navigation = useNavigation();
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [openCountry, setOpenCountry] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [mailingCountry, setMailingCountry] = useState();
  const [openMailingCountry, setOpenMailingCountry] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

  const handleNext = () => {
    if (active === 0) {
      if (!email || !password || !confirmPassword) {
        return alert('Please fill all the fields');
      }
      if (password !== confirmPassword) {
        return alert('Passwords do not match');
      }
    } else if (active === 1) {
      if (!fullName || !gender || !country || !phoneNumber) {
        return alert('Please fill all the fields');
      }
    } else {
      if (
        !address ||
        !state ||
        !city ||
        !postalCode ||
        !mailingCountry ||
        !agreeTerms
      ) {
        return alert('Please fill all the fields');
      }
    }
    setActive(active + 1);
  };
  const handlePrevious = () => setActive(active - 1);

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      email,
      password,
      password_confirmation: confirmPassword,
      name: fullName,
      gender: gender === 'm' ? 'Male' : 'Female',
      lscode: country?.substring(1),
      phone: phoneNumber,
      business_country: mailingCountry,
      street_address: address,
      state,
      city,
      postal_code: postalCode
    };
    console.log(data);
    const response = await register(data);
    if (response && response.data) {
      Alert.alert(
        'Success',
        'Account has been created successfully. You may login with the email and password.'
      );
      navigation.navigate('Login');
    }
    console.log('response', response.data);
    setLoading(false);
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
      {/* <Image
        source={require('src/assets/images/logo-main.png')}
        style={styles.logo}
        resizeMode="contain"
      /> */}
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.step}>
            <View
              style={
                active === 0 ? styles.stepNumberActive : styles.stepNumber
              }>
              <Text
                style={active === 0 ? styles.stepTextActive : styles.stepText}>
                1
              </Text>
            </View>
            <Text style={styles.stepTitle}>Account Setup</Text>
          </View>
          <View style={styles.step}>
            <View
              style={
                active === 1 ? styles.stepNumberActive : styles.stepNumber
              }>
              <Text
                style={active === 1 ? styles.stepTextActive : styles.stepText}>
                2
              </Text>
            </View>
            <Text style={styles.stepTitle}>Personal Details</Text>
          </View>
          <View style={styles.step}>
            <View
              style={
                active === 2 ? styles.stepNumberActive : styles.stepNumber
              }>
              <Text
                style={active === 2 ? styles.stepTextActive : styles.stepText}>
                3
              </Text>
            </View>
            <Text style={styles.stepTitle}>Mailing Address</Text>
          </View>
        </View>
        {active === 0 ? (
          <AccountDetails
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        ) : active === 1 ? (
          <PersonalDetails
            fullName={fullName}
            setFullName={setFullName}
            gender={gender}
            handleGenderChange={value => setGender(value)}
            openCountry={openCountry}
            setOpenCountry={setOpenCountry}
            selectedCountry={country}
            setSelectedCountry={setCountry}
            radioOptions={genders}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        ) : (
          <MailingDetails
            businessName={businessName}
            setBusinessName={setBusinessName}
            address={address}
            setAddress={setAddress}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            countries={countryList}
            handleOpenCountry={setOpenMailingCountry}
            isCountryVisible={openMailingCountry}
            selectedCountry={mailingCountry}
            setSelectedCountry={setMailingCountry}
            agreeTerms={agreeTerms}
            setAgreeTerms={setAgreeTerms}
          />
        )}
        <Button
          label={active === 2 ? 'Submit' : 'Next'}
          onPress={active === 2 ? handleSubmit : handleNext}
          disabled={active === 2 && !agreeTerms}
          loading={loading}
        />
        {active !== 0 && (
          <Button
            label="Previous"
            onPress={handlePrevious}
            fill={false}
            loading={loading}
          />
        )}
        <View style={styles.footer}>
          <Text style={styles.subHeading}>Already have an account?</Text>
          <TextButton
            label="Sign In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
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
    paddingTop: 30,
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
    fontSize: 14
  },
  stepTextActive: {
    fontWeight: '500',
    fontSize: 14,
    color: '#1bc5bd'
  },
  stepTitle: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  }
});

export default Register;
