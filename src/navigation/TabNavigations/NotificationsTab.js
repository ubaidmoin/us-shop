import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  NotificationsAddOns,
  NotificationsPackages,
  NotificationsShipments,
  NotificationsTickets
} from 'src/screens';
import { Header } from 'src/components';

const Tab = createMaterialTopTabNavigator();

const Navigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen
          name="NotificationsPackages"
          component={NotificationsPackages}
          options={{
            title: 'Packages',
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}
        />
        <Tab.Screen
          name="NotificationsShipments"
          component={NotificationsShipments}
          options={{
            title: 'Shipments',
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}
        />
        <Tab.Screen
          name="NotificationsAddOns"
          component={NotificationsAddOns}
          options={{
            title: 'Addons',
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}
        />
        <Tab.Screen
          name="NotificationsTickets"
          component={NotificationsTickets}
          options={{
            title: 'Tickets',
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const NotificationsTab = () => {
  return <RootNavigator />;
};

export default NotificationsTab;
