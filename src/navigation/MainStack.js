import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Register,
  Login,
  ResetPassword,
  Welcome,
  Splash,
  TermsAndConditionsStackScreen
} from 'src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider, useStateValue } from 'src/services/state/State';
import { reducer, actions } from 'src/services/state/Reducer';
import { initialState } from 'src/services/state/InitialState';
import { getUserInfo } from 'src/services/DataManager';
import LeftDrawer from './LeftDrawer';
import { getNotifications } from 'src/services/api/ApiManager';

const Stack = createStackNavigator();

const Navigator = ({ initialRoute }) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ gestureEnabled: false, header: () => null }}
      />
      <Stack.Screen
        name="TermsAndConditionsStackScreen"
        component={TermsAndConditionsStackScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Dashboard"
        component={LeftDrawer}
        options={{ gestureEnabled: false, header: () => null }}
      />
      {/* <Stack.Screen
        name="RightDrawer"
        component={RightDrawer}
        options={{ gestureEnabled: false, header: () => null }}
      /> */}
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const [{}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [initialRoute, setInitialRoute] = useState('');

  const fetchNotifications = async token => {
    const response = await getNotifications(token);
    console.log('getNotifications', response);
    if (response && response.data) {
      dispatch({
        type: actions.SET_NOTIFICATIONS,
        payload: response?.data?.data
      });
    }
  };

  const checkStatus = async () => {
    try {
      setLoading(true);
      const userInfo = await getUserInfo();
      if (userInfo) {
        console.log(userInfo);
        dispatch({
          type: actions.SET_CURRENT_USER,
          payload: userInfo
        });
        dispatch({
          type: actions.SET_ACCESS_TOKEN,
          payload: userInfo.api_token
        });
        fetchNotifications(userInfo.api_token);
        setInitialRoute('Dashboard');
      } else {
        dispatch({
          type: actions.SET_CURRENT_USER,
          payload: ''
        });
        setInitialRoute('Login');
      }
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? <Splash /> : <Navigator initialRoute={initialRoute} />;
  // return <Navigator initialRoute={initialRoute} />;
};

const MainStack = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </StateProvider>
  );
};

export default MainStack;
