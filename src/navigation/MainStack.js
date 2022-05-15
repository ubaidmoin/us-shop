import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Register, Login, ResetPassword, Welcome } from 'src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider, useStateValue } from 'src/services/state/State';
import { reducer, actions } from 'src/services/state/Reducer';
import { initialState } from 'src/services/state/InitialState';
import { getUserInfo } from 'src/services/DataManager';
import LeftDrawer from './LeftDrawer';

const Stack = createStackNavigator();

const Navigator = ({ initialRoute }) => {
  return (
    <Stack.Navigator
    // initialRouteName={initialRoute}
    >
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
  const [{ currentUser }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [initialRoute, setInitialRoute] = useState('');

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
          payload: userInfo.access_token
        });
        setInitialRoute('HomeScreen');
      } else {
        dispatch({
          type: actions.SET_CURRENT_USER,
          payload: ''
        });
        setInitialRoute('LandingScreen');
      }
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   return loading ? (
  //     <Splash.navigator />
  //   ) : (
  //     <Navigator initialRoute={initialRoute} />
  //   );
  return <Navigator initialRoute={initialRoute} />;
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
