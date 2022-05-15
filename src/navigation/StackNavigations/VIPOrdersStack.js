import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookVIPService, CreateVIPOrder } from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookVIPService"
        component={BookVIPService}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateVIPOrder"
        component={CreateVIPOrder}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const VIPOrdersStack = () => {
  return <RootNavigator />;
};

export default VIPOrdersStack;
