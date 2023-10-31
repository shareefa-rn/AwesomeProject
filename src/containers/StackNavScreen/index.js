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
import TestScreen from '../TestScreen';
import DashBoardScreen from '../DashBoardScreen';
import DetailScreen from '../DetailViewScreen';
import HooksScreen from '../HooksScreen';
import NavigationTestScreen from '../../NavigationScreen';

const Stack = createNativeStackNavigator();

function StackNavScreen() {
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
        <Stack.Screen
          name="Test"
          component={TestScreen}
          headerShown={false}
          options={{headerMode: 'none', headerShown: true}}
        />
        <Stack.Screen
          name="Home"
          component={DashBoardScreen}
          options={{headerShown: true}}
        />
      </Stack.Group>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={styles.screenOptionStyle}
      initialRouteName="Test">
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  screenOptionStyle: {
    headerStyle: {
      backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
    headerShown: true,
  },
  options: {
    title: 'My home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default StackNavScreen;
