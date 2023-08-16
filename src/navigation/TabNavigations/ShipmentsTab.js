import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ReceivedPackages,
  Shipments,
  Delivered,
  CreateShipment
} from 'src/screens';
import { Header } from 'src/components';
import ReceivedPackageDetails from 'src/screens/received-packages/details';
import ShipmentDetails from 'src/screens/shipments/details';
import DeliveredDetails from 'src/screens/delivered/details';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen
          name="ReceivedPackages"
          component={ReceivedPackages}
          options={{ title: 'Received Packages' }}
        />
        <Tab.Screen name="Shipments" component={Shipments} />
        <Tab.Screen name="Delivered" component={Delivered} />
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
        name="CreateShipment"
        component={CreateShipment}
        options={{ header: () => null }}
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
        name="DeliveredDetails"
        component={DeliveredDetails}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <StackNavigator />;
};

const ShipmentsTab = () => {
  return <RootNavigator />;
};

export default ShipmentsTab;
