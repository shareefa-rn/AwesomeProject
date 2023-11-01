/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerScreen} from './src/containers';
import {PersistanceHelper} from './src/helpers';
import {EventRegister} from 'react-native-event-listeners';

const App = () => {
  const login = () => {};
  const nav = () => {};
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};
export default App;
