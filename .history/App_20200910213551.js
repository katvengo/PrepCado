import React from 'react';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import LoginScreen from './App/Screens/LoginScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import MyAccount from './App/Screens/MyAccount';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
  <Stack.Screen name="Login" component={LoginScreen} /> 
  <Stack.Screen name="Home" component={WelcomeScreen} /> 
  <Stack.Screen name="Register" component={RegisterScreen} /> 
  <Stack.Screen name="MyAccount" component={MyAccount} /> 

  </Stack.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
    <StackNavigator />
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
