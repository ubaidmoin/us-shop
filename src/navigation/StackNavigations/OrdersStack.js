import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BuyForMe, CreateOrder } from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BuyForMe"
        component={BuyForMe}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateOrder"
        component={CreateOrder}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const OrdersStack = () => {
  return <RootNavigator />;
};

export default OrdersStack;
