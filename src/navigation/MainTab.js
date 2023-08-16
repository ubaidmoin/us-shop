import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dashboard } from 'src/screens';
import { OrdersStack } from './StackNavigations';
import { NotificationsTab, ShipmentsTab } from './TabNavigations';
import { Platform, View } from 'react-native';
import { useStateValue } from 'src/services/state/State';
import { Text } from 'src/components';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const [{ notifications }] = useStateValue();

  return (
    <Tab.Navigator
      screenOptions={{
        ...bottomTabOptions,
        tabBarStyle: {
          ...bottomTabOptions.tabBarStyle,
          margin: Platform.OS === 'ios' ? 20 : 10
        }
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'Dashboard',
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              color={focused ? '#3699ff' : '#494b74'}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="ShipmentsTab"
        component={ShipmentsTab}
        options={{
          title: 'Shipments',
          headerTitle: 'Shipments',
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="dropbox"
              color={focused ? '#3699ff' : '#494b74'}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="BuyForMe"
        component={OrdersStack}
        options={{
          tabBarLabel: 'Buy for me',
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="shopping-basket"
              color={focused ? '#3699ff' : '#494b74'}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsTab}
        options={{
          tabBarLabel: 'Notifications',
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="notifications-active"
                color={focused ? '#3699ff' : '#494b74'}
                size={25}
              />
              {notifications?.all_count > 0 && (
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Text style={{ color: '#fff', fontSize: 11 }}>
                    {notifications?.all_count}
                  </Text>
                </View>
              )}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const MainTab = () => {
  return <RootNavigator />;
};

export default MainTab;

const bottomTabOptions = {
  tabBarActiveTintColor: '#3699ff',
  tabBarInactiveTintColor: '#494b74',
  tabBarStyle: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    elevation: 10,
    borderTopWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#1584F7',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    paddingBottom: 15,
    paddingTop: 10,
    height: 70
  }
};
