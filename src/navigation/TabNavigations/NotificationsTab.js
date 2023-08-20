import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
              fontSize: 10
            }
          }}
        />
        <Tab.Screen
          name="NotificationsShipments"
          component={NotificationsShipments}
          options={{
            title: 'Shipments',
            tabBarLabelStyle: {
              fontSize: 10
            }
          }}
        />
        <Tab.Screen
          name="NotificationsAddOns"
          component={NotificationsAddOns}
          options={{
            title: 'Addons',
            tabBarLabelStyle: {
              fontSize: 10
            }
          }}
        />
        <Tab.Screen
          name="NotificationsTickets"
          component={NotificationsTickets}
          options={{
            title: 'Tickets',
            tabBarLabelStyle: {
              fontSize: 10
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
