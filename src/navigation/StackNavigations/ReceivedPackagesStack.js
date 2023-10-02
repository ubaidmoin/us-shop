import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ReceivedPackages,
  CreateShipment,
  TermsAndConditionsStackScreen
} from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReceivedPackages"
        component={ReceivedPackages}
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

const ReceivedPackagesStack = () => {
  return <RootNavigator />;
};

export default ReceivedPackagesStack;
