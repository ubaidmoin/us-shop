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
import { humanDifferenceDate } from 'src/services/constants';

const NotificationsAddOns = () => {
  const [{ notifications }] = useStateValue();

  return (
    <View style={styles.container}>
      {notifications?.addons_count > 0 && (
        <FlatList
          data={notifications?.addons_notification || []}
          style={styles.flatlist}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.card,
                {
                  marginBottom:
                    notifications?.addons_count - 1 === index ? 130 : 10
                }
              ]}>
              <View style={styles.row}>
                <View style={styles.icon}>
                  <FontAwesome name="dropbox" color="'#3699ff'" size={25} />
                </View>
                <View style={styles.notification}>
                  <Text style={styles.subHeading}>
                    {humanDifferenceDate(item?.updated_at)}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
      {notifications?.addons_count === 0 && (
        <View
          style={{
            width: '100%',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ marginTop: 20, textAlign: 'center' }}>
            All caught up
          </Text>
          <Text style={{ marginTop: 10, textAlign: 'center' }}>
            No notifications found
          </Text>
        </View>
      )}
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
