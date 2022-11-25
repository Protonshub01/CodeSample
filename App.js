/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/redux/store/createStore';
import { WRootToastApp } from 'react-native-smart-tip'
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppLoader from './app/components/AppLoader/AppLoader';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <WRootToastApp>
        <NavigationContainer>
          <AppLoader />
          <RootStackScreen />
        </NavigationContainer>
      </WRootToastApp>
    </Provider>
  );
};


export default App;
