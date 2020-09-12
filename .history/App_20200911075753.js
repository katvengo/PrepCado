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

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Account = () => <Screen><Text</Screen>
const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" headerMode="none">
  <Tab.Screen name="Login" component={LoginScreen} /> 
  <Tab.Screen name="Home" component={WelcomeScreen} /> 
  <Tab.Screen name="Register" component={RegisterScreen} /> 
  <Tab.Screen name="MyAccount" component={MyAccount} /> 

  </Tab.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
    <TabNavigator />
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
