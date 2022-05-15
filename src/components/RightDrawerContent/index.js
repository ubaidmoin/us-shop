import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, SecondaryButton, Divider } from 'src/components';

const rightDrawerOptions = [
  {
    id: 1,
    label: 'My Profile',
    value: 'MyProfile',
    caption: 'Account settings and more',
    icon: <Feather name="settings" color="#1bc5bd" size={20} />
  },
  {
    id: 2,
    label: 'Change Password',
    value: 'ChangePassword',
    caption: 'Change your password',
    icon: <Ionicons name="key" color="#f64e60" size={20} />
  },
  {
    id: 3,
    label: 'Terms & Conditions',
    value: 'TermsAndConditions',
    icon: (
      <Image
        source={require('src/assets/icons/terms-and-conditions.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  },
  {
    id: 4,
    label: 'Privacy Policy',
    value: 'PrivacyPolicy',
    icon: <MaterialIcons name="privacy-tip" color="#1bc5bd" size={20} />
  },
  {
    id: 5,
    label: 'Prohibited Items',
    value: 'ProhibitedItems',
    icon: <Foundation name="prohibited" color="#1bc5bd" size={25} />
  }
];

const RightDrawerContent = props => {
  const { navigation } = props;
  const handleCloseDrawer = () => navigation?.toggleDrawer();
  const handleOnPressItem = item => {
    navigation.navigate(item.value);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.profileContainer}>
          <View style={styles.row}>
            <Text style={styles.profile}>My Profile</Text>
            <AntDesign
              name="closesquare"
              size={25}
              color="#86888a"
              onPress={handleCloseDrawer}
            />
          </View>
        </View>
        <View style={styles.dpRow}>
          <View style={styles.dp}>
            <Text style={styles.initial}>U</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>Ubaid Ullah</Text>
            <View style={styles.emailRow}>
              <Entypo name="mail" color="#3699ff" size={20} />
              <Text style={styles.email}>Tanwer.ubaid@gmail.com</Text>
            </View>
            <View style={styles.signout}>
              <SecondaryButton label="Sign Out" onPress={handleLogout} />
            </View>
          </View>
        </View>
        <View style={styles.divider}>
          <Divider />
        </View>
        {rightDrawerOptions.map((item, index) => (
          <View style={styles.drawerContainer}>
            <DrawerItem
              key={item.id}
              label={item.label}
              labelStyle={styles.label}
              style={styles.item}
              icon={() => item.icon}
              onPress={() => handleOnPressItem(item)}
            />
          </View>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 10
  },
  profileContainer: {
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dpRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20
  },
  profile: {
    color: '#86888a',
    fontSize: 14,
    fontWeight: '500'
  },
  item: {
    width: '100%'
  },
  caption: {
    width: '100%',
    color: '#b5b5c3',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: '54%',
    marginTop: -25
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginLeft: -15
  },
  drawerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    marginRight: 30
  },
  header: {
    marginTop: 30
  },
  headerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6c6f8b',
    textTransform: 'uppercase',
    marginRight: 10
  },
  iconContainer: {
    backgroundColor: '#f3f6f9',
    borderRadius: 5,
    padding: 15
  },
  dp: {
    backgroundColor: '#c9f7f5',
    borderRadius: 5,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  initial: {
    fontSize: 25,
    fontWeight: '500',
    color: '#1bc5bd'
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  details: {
    marginLeft: 10
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  email: {
    color: '#b5b5c3',
    fontWeight: '500',
    fontSize: 11,
    marginLeft: 5
  },
  signout: {
    width: 100,
    marginTop: 5
  },
  divider: {
    marginTop: 25,
    marginBottom: 10
  },
  drawerIcon: {
    width: 25,
    height: 25
  }
});

export default RightDrawerContent;
