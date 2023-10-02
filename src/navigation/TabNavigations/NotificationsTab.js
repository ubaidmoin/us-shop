import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  NotificationsAddOns,
  NotificationsPackages,
  NotificationsShipments,
  NotificationsTickets,
  TicketDetails
} from 'src/screens';
import { Header } from 'src/components';
import { createStackNavigator } from '@react-navigation/stack';
import ReceivedPackageDetails from 'src/screens/received-packages/details';
import ShipmentDetails from 'src/screens/shipments/details';
import AddOnsDetails from 'src/screens/add-ons/details';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

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
              fontSize: 9
            }
          }}
        />
        <Tab.Screen
          name="NotificationsShipments"
          component={NotificationsShipments}
          options={{
            title: 'Shipments',
            tabBarLabelStyle: {
              fontSize: 9
            }
          }}
        />
        <Tab.Screen
          name="NotificationsAddOns"
          component={NotificationsAddOns}
          options={{
            title: 'Addons',
            tabBarLabelStyle: {
              fontSize: 9
            }
          }}
        />
        <Tab.Screen
          name="NotificationsTickets"
          component={NotificationsTickets}
          options={{
            title: 'Tickets',
            tabBarLabelStyle: {
              fontSize: 9
            }
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShipmentStack"
        component={Navigator}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="ReceivedPackageDetails"
        component={ReceivedPackageDetails}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ShipmentDetails"
        component={ShipmentDetails}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="AddOnsDetails"
        component={AddOnsDetails}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="TicketDetails"
        component={TicketDetails}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <StackNavigator />;
};

const NotificationsTab = () => {
  return <RootNavigator />;
};

export default NotificationsTab;
