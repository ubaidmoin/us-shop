import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateTicket, SupportTickets, TicketDetails } from 'src/screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SupportTickets"
        component={SupportTickets}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="CreateTicket"
        component={CreateTicket}
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
  return <Navigator />;
};

const SupportTicketsStack = () => {
  return <RootNavigator />;
};

export default SupportTicketsStack;
