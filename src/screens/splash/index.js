import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

const Splash = () => {
  return (
    <View
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // paddingTop: Platform.OS === 'ios' ? 70 : 40,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center'
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
    height: 65,
    marginTop: -50
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

export default Splash;
