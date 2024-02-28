import React from 'react'
import {View,Text} from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { RouteProp, useRoute } from '@react-navigation/native';

interface SettingsScreenProps {
    navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
    route: RouteProp<RootStackParamList, 'Settings'>;
  }
const Settings = ({navigation,route}:SettingsScreenProps) => {
   
    const { name, email } = route.params || {};
    console.log(route.params, '---------------------------llllllllllllllllllllllllll');

    return (
        <View>
           
           <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>


        </View>
    );
};

export default Settings