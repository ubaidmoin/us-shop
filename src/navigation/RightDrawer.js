import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  ChangePassword,
  Calculator,
  CreateTicket,
  Invoices,
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
      <Drawer.Screen name="Invoices" component={Invoices} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="SupportTickets" component={SupportTickets} />
      <Drawer.Screen name="ProhibitedItems" component={ProhibitedItems} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
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
