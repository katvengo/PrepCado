import React, {useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { AppLoading } from 'expo'

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
// import { Auth } from 'aws-amplify';
import AWSAppSyncClient from "aws-appsync";

import { StyleSheet} from 'react-native';

import navigationTheme from './App/Navigation/navigationTheme'
import AppNavigationTab from './App/Navigation/AppNavigationTab'
import AuthNavigator from './App/Navigation/AuthNavigator'
import AuthContext from './App/Auth/context'
import authStorage from './App/Auth/storage'

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () => token, 
  }
});

export default function App() {
  const [user, setUser] = useState()
  const [client, setClient] = useState()
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    console.log(user)
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{user, setUser}, {client, setClient}}>
    <NavigationContainer theme={navigationTheme}>
    { user ? <AppNavigationTab /> : <AuthNavigator /> }
    </NavigationContainer>    
    </AuthContext.Provider>

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
