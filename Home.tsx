import React from 'react'
import {View,Text} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';

interface HomeScreenProps{
navigation:StackNavigationProp<RootStackParamList,'Home'>
}

const Home =({navigation}:HomeScreenProps) => {
    return (
        <View>
          <Text onPress={() => navigation.navigate('Settings',{ name: 'Abhi', email: 'abhi@example.com' })}>
        Go to Settings
      </Text>
           
        </View>
    );
};

export default Home





