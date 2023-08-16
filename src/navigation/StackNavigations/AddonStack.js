import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddOns, CreateAddon } from 'src/screens';
import AddOnsDetails from 'src/screens/add-ons/details';
import { useStateValue } from 'src/services/state/State';
import { getNotifications } from 'src/services/api/ApiManager';

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
      <Stack.Screen
        name="AddOnsDetails"
        component={AddOnsDetails}
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
