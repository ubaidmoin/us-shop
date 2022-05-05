import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register, Login, ResetPassword } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { StateProvider, useStateValue } from '../services/state/State';
import { reducer, actions } from '../services/state/Reducer';
import { initialState } from '../services/state/InitialState';
import { getUserInfo } from '../services/DataManager';

const Stack = createStackNavigator();

const Navigator = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      headerMode="none"
      // initialRouteName={initialRoute}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ gestureEnabled: false }}
      />
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
