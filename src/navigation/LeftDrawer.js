import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dashboard } from 'src/screens';
import { LeftDrawerContent } from 'src/components';
import MainTab from './MainTab';
import { useStateValue } from 'src/services/state/State';
import { actions } from 'src/services/state/Reducer';
import RightDrawer from './RightDrawer';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const [, dispatch] = useStateValue();
  let leftNavigation;

  useEffect(() => {
    if (leftNavigation) {
      dispatch({
        type: actions.SET_LEFT_DRAWER,
        payload: leftNavigation
      });
    }
  }, [leftNavigation]);
  return (
    <Drawer.Navigator
      drawerContent={props => <LeftDrawerContent {...props} />}
      screenOptions={props => {
        leftNavigation = props.navigation;
        return {
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#a2a3b8',
          drawerStyle: {
            backgroundColor: '#1e1e2d'
          },
          headerShown: false,
          drawerType: 'front'
        };
      }}>
      <Drawer.Screen name="RightDrawer" component={RightDrawer} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return <Navigator />;
};

const LeftDrawer = () => {
  return <RootNavigator />;
};

export default LeftDrawer;
