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
import useFectch from './src/helpers/useFetch';

const App = () => {
  const [data] = useFectch('https://jsonplaceholder.typicode.com/todos');
  const Fetch = () => {
    return (
      <>
        {data &&
          data.map(item => {
            console.log('custome hook==' + item.title);
          })}
      </>
    );
  };
  return (
    <NavigationContainer>
      <Fetch />
      <DrawerScreen />
    </NavigationContainer>
  );
};
export default App;
