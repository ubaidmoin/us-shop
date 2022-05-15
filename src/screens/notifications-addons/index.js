import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  Platform,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from 'src/services/state/State';
import { Button, Text, SearchBar, TextHighlight } from 'src/components';

const data = [
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  },
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  },
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  },
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  },
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  },
  {
    title: 'Test',
    message: 'Package has been updated 1 month ago'
  }
];

const NotificationsAddOns = () => {
  const navigation = useNavigation();
  const [{ signUpFirstTime }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.flatlist}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              { marginBottom: data.length - 1 === index ? 130 : 10 }
            ]}>
            <View style={styles.row}>
              <View style={styles.icon}>
                <FontAwesome name="dropbox" color="'#3699ff'" size={25} />
              </View>
              <View style={styles.notification}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.subHeading}>{item.message}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'center'
  },
  icon: {
    backgroundColor: '#eee5ff',
    padding: 15,
    borderRadius: 10
  },
  body: {
    paddingTop: 50,
    width: '100%'
  },
  flatlist: {
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    borderRadius: 13,
    elevation: 5,
    padding: 10
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%'
  },
  subHeading: {
    fontSize: 14,
    width: '100%',
    color: '#b5b5c3'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5
  },
  notification: {
    marginLeft: 10,
    width: '85%'
  }
});

export default NotificationsAddOns;
