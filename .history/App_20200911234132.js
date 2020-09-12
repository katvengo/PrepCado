import React from 'react';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { Auth } from 'aws-amplify';
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
import AuthNavigator from './App/Navigation/AuthNavigator'
import navigationTheme from './App/Navigation/navigationTheme'
import AppNavigationTab from './App/Navigation/AppNavigationTab'

export default function App() {
  async function onAppLoad() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user)
    if (user) {
      formState = "signedIn";
    } else {
      formState = "signUp";
    }
  }
  return (
    <NavigationContainer theme={navigationTheme}>
      
    {/* <AuthNavigator /> */}
    {/* <AppNavigationTab /> */}
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
