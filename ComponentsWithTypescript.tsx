import React from 'react'
import {View,Text} from 'react-native'

interface MyProps {
    name: string;
    email: string;
    age: number; // Ensure age is explicitly of type number
}

const ComponentsWithTypescript = ({ name, email, age }: MyProps) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{age}</Text>
        </View>
    );
};

export default ComponentsWithTypescript