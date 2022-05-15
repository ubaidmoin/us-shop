import 'react-native-gesture-handler';
import React from 'react';

import Navigator from './src/navigation/MainStack';
import { StatusBar } from 'src/components';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#1a1a27" barStyle="light-content" />
      <Navigator />
    </>
  );
};

export default App;
