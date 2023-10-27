import {} from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavScreen from '../StackNavScreen';
import BottomTabNavigator from '../TabScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{title: 'Tab Screen'}}
      />
      <Drawer.Screen
        name="Stack"
        component={StackNavScreen}
        options={{title: 'Navigation Screen'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
