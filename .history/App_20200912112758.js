import React, {useState} from 'react';
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

import AuthNavigator from './App/Navigation/AuthNavigator'
import navigationTheme from './App/Navigation/navigationTheme'
import AppNavigationTab from './App/Navigation/AppNavigationTab'
import AuthContext from './App/Auth/context'

export default function App() {
  const [user, setUser] = useState()

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
    <AuthContext>

    <NavigationContainer theme={navigationTheme}>

    <AuthNavigator />
    {/* <AppNavigationTab /> */}
    </NavigationContainer>    
    </AuthContext>

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