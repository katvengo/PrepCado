import React from 'react';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import LoginScreen from './App/Screens/LoginScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import MyAccount from './App/Screens/MyAccount';
import Screen from './App/Screens/Screen';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
    name="Home" component={WelcomeScreen}
    />
    <Stack.Screen 
    name="Login" component={LoginScreen}
    />
    <Stack.Screen name="Register" component={RegisterScreen}/>
  </Stack.Navigator>
}
const TabNavigator = () => (
  <Tab.Navigator 
  tabBarOptions={{
    activeBackgroundColor: 'tomato',
    activeTintColor: 'white',
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black',

  }}
  headerMode="none">
  <Tab.Screen 
  name="Home" 
  component={WelcomeScreen}
  options={{
    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
  }} /> 

  <Tab.Screen name="Account" component={MyAccount} /> 

  </Tab.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: '#000'
  }
});
