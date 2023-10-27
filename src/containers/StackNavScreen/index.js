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
import SettingScreen from '../DetailViewScreen/SettingScreen';

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
      <Stack.Group initialRouteName="Hooks Screen">
        <Stack.Screen
          name="Test Screen"
          component={TestScreen}
          headerShown={false}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen name="Home" component={DashBoardScreen} />
        <Stack.Screen name="Details Screen" component={DetailScreen} />
        <Stack.Screen name="Hooks Screen" component={HooksScreen} />
        <Stack.Screen name="Navigation" component={SettingScreen} />
      </Stack.Group>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={styles.screenOptionStyle}>
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
  screenOptionStyle: {
    headerStyle: {
      backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
    headerShown: true,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default StackNavScreen;
