import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Delivered, CreateShipment } from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Delivered"
        component={Delivered}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateShipment"
        component={CreateShipment}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const DeliveredStack = () => {
  return <RootNavigator />;
};

export default DeliveredStack;
