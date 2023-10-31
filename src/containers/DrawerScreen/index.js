import {} from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackNavScreen from '../StackNavScreen';
import BottomTabNavigator from '../TabScreen';
import DetailScreen from '../DetailViewScreen';
import HooksScreen from '../HooksScreen';
import NavigationTestScreen from '../../NavigationScreen';
import DashBoardScreen from '../DashBoardScreen';
import TestScreen from '../TestScreen';
import LifeyCycleTestScreen from '../LifeCycleTestScreen';
import CounterButton from '../LifeCycleTestScreen/CounterButton';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerScreen = () => {
  console.log('i am from drawer screen');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="drawer screen"
        options={{headerShown: false}}
        component={() => (
          <Drawer.Navigator initialRouteName="Tab">
            <Drawer.Screen
              name="Tab"
              component={BottomTabNavigator}
              options={{title: 'Tab Screen'}}
            />
            <Drawer.Screen
              name="Stack"
              component={StackNavScreen}
              options={{title: 'Navigation Screen'}}
            />
          </Drawer.Navigator>
        )}
      />
      <Stack.Screen name="Details Screen" component={DetailScreen} />

      <Stack.Screen name="LifeCycle Screen" component={LifeyCycleTestScreen} />
      <Stack.Screen name="Counter Screen" component={CounterButton} />

      <Stack.Screen name="Async" component={CounterButton} />

      <Stack.Screen
        name="Hooks Screen"
        component={HooksScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Navigation" component={NavigationTestScreen} />
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
    </Stack.Navigator>
  );
};

export default DrawerScreen;
