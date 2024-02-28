import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNav} from './App';
import CustomDrawerContent, { DrawerContent } from './CustomDrawerContent';
import Home from './Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        cardStyle: {backgroundColor: 'white'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{gestureEnabled: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;