import React, { ReactNode } from 'react';
import { View, TouchableOpacity, GestureResponderEvent ,Platform} from 'react-native';

interface CustomButtonProps {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ top: Platform.OS === 'web' ? '-45%' : '-35%',
   position:'absolute' ,
    left:Platform.OS === 'web' ? '48%' : '41%'}}>
    <View style={{ width: 70, height: 70 }}>{children}</View>
  </TouchableOpacity>
);
