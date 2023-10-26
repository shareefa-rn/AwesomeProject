/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashBoardScreen,
  DetailScreen,
  HooksScreen,
  TestScreen,
  SettingScreen,
} from './src/containers';

const Stack = createNativeStackNavigator();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={() => (
            <View>
              <Text>Login</Text>
            </View>
          )}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={() => (
            <View>
              <Text>Signup</Text>
            </View>
          )}></Stack.Screen>
      </Stack.Group>
    );
  };
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Test Screen" component={TestScreen} />
        <Stack.Screen name="Home" component={DashBoardScreen} />
        <Stack.Screen name="Details Screen" component={DetailScreen} />
        <Stack.Screen name="Hooks Screen" component={HooksScreen} />
        <Stack.Screen name="Navigation" component={SettingScreen} />
      </Stack.Group>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLoggedIn ? getMainStack() : getAuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default App;
