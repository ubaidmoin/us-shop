import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Shipments,
  CreateShipment,
  TermsAndConditionsStackScreen
} from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shipments"
        component={Shipments}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateShipment"
        component={CreateShipment}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="TermsAndConditionsStackScreen"
        component={TermsAndConditionsStackScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const ShipmentsStack = () => {
  return <RootNavigator />;
};

export default ShipmentsStack;
