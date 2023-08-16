import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStateValue } from 'src/services/state/State';

const Header = ({ isStack = false }) => {
  const navigation = useNavigation();
  const [{ leftDrawer, rightDrawer }] = useStateValue();

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {isStack ? (
          <Feather
            name="arrow-left"
            onPress={() => navigation?.goBack()}
            color="#B2B3D0"
            size={25}
            style={styles.margin}
          />
        ) : (
          <Feather
            name="menu"
            onPress={() => leftDrawer?.toggleDrawer()}
            color="#B2B3D0"
            size={25}
            style={styles.margin}
          />
        )}
        <Image
          source={require('src/assets/images/header.png')}
          style={styles.margin}
        />
      </View>
      <Ionicons
        name="person"
        onPress={() => rightDrawer?.toggleDrawer()}
        color="#B2B3D0"
        size={25}
        style={styles.margin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a27',
    padding: 10
  },
  image: {
    width: '35%',
    height: 30
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  margin: {
    marginHorizontal: 5
  }
});

export default Header;
