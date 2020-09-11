import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import LoginScreen from './App/Screens/LoginScreen';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const StackNavigator = () => {
  <Stack.Navigator>
  <Stack.Screen name="Welcome Screen" component={WelcomeScreen} /> 
  <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
  </Stack.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
    
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
});
