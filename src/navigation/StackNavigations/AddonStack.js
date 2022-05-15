import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddOns, CreateAddon } from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddOns"
        component={AddOns}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateAddon"
        component={CreateAddon}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const AddonStack = () => {
  return <RootNavigator />;
};

export default AddonStack;
