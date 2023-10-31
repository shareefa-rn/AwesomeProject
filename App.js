/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerScreen} from './src/containers';
import {PersistanceHelper} from './src/helpers';

const App = () => {
  useEffect(() => {
    PersistanceHelper.setValue('myKey', 'hey is this value stored?');
  }, []);

  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};
export default App;
