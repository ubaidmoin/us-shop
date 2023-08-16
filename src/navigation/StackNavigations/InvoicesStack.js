import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Invoices } from 'src/screens';
import InvoicesDetails from 'src/screens/invoices/details';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Invoices"
        component={Invoices}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="InvoicesDetails"
        component={InvoicesDetails}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const InvoicesStack = () => {
  return <RootNavigator />;
};

export default InvoicesStack;
