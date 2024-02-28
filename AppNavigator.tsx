import React from 'react';
import { Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CustomButton } from './CustomButton'; // Adjust the path based on your project structure
import Home from './Home';
import Settings from './Settings';
import CustomDrawerContent from './CustomDrawerContent';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#fff"
              />
            );
          },
        }}
      />
     
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigator = () => (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{ headerShown: false }} 
    >
      {/* <Drawer.Screen name="Home" component={TabNavigator} options={{ headerTitle: '' }}  /> */}
      <Drawer.Screen name="Settings" component={StackNav} options={{ headerTitle: '' }}  />
      
    </Drawer.Navigator>
  );

  const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { position: 'absolute', backgroundColor: 'lightgrey', height:80 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Home1' component={Home} />

        <Tab.Screen
          name="Home2"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/favicon.png')}
                resizeMode='contain'
                style={{
                  width: 30, height: 30, tintColor: 'red'
                }}
              />
            ),
            tabBarButton: (props) => (
              <CustomButton {...props} />
            ),
          }}
        />
        <Tab.Screen name='Home3' component={Home} />
        <Tab.Screen name='Home4' component={Home} />

      </Tab.Navigator>
  )

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

export default App;
