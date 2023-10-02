import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  ChangePassword,
  Calculator,
  CreateTicket,
  MyProfile,
  SupportTickets,
  TermsAndConditions,
  PrivacyPolicy,
  ProhibitedItems
} from 'src/screens';
import { RightDrawerContent } from 'src/components';
import MainTab from './MainTab';
import LeftDrawer from './LeftDrawer';
import { AddonStack, VIPOrdersStack } from './StackNavigations';
import { useStateValue } from 'src/services/state/State';
import { actions } from 'src/services/state/Reducer';
import InvoicesStack from './StackNavigations/InvoicesStack';
import Membership from 'src/screens/membership';
import SupportTicketsStack from './StackNavigations/SupportTicketsStack';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const [, dispatch] = useStateValue();
  let rightNavigation;

  useEffect(() => {
    if (rightNavigation) {
      dispatch({
        type: actions.SET_RIGHT_DRAWER,
        payload: rightNavigation
      });
    }
  }, [rightNavigation]);
  return (
    <Drawer.Navigator
      drawerContent={props => <RightDrawerContent {...props} />}
      screenOptions={props => {
        rightNavigation = props.navigation;
        return {
          headerShown: false,
          drawerType: 'front',
          drawerPosition: 'right'
        };
      }}>
      <Drawer.Screen name="MainTab" component={MainTab} />
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
      <Drawer.Screen name="AddOns" component={AddonStack} />
      <Drawer.Screen name="BookVIPService" component={VIPOrdersStack} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="Calculator" component={Calculator} />
      <Drawer.Screen name="CreateTicket" component={CreateTicket} />
      <Drawer.Screen name="Invoices" component={InvoicesStack} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="SupportTickets" component={SupportTicketsStack} />
      <Drawer.Screen name="ProhibitedItems" component={ProhibitedItems} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Drawer.Screen name="Membership" component={Membership} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const RightDrawer = () => {
  return <RootNavigator />;
};

export default RightDrawer;
