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

    const userObject = {
      basicInfo: {firstName: 'abc', lastName: 'xyz'},
      contactInfo: {phone: '123-456', email: 'abc@xyz'},
      educationInfo: {degree: 'abc123', institution: 'xyz'},
    };

    PersistanceHelper.setObject('myFirstObject', userObject);
  }, []);

  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};
export default App;
