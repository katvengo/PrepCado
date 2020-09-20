import React, {useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { AppLoading } from 'expo'

import AmplifyAPI, graphqlOperation from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { Auth } from 'aws-amplify';
import { StyleSheet} from 'react-native';

import navigationTheme from './App/Navigation/navigationTheme'
import AppNavigationTab from './App/Navigation/AppNavigationTab'
import AuthNavigator from './App/Navigation/AuthNavigator'
import AuthContext from './App/Auth/context'
import authStorage from './App/Auth/storage'

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false);
  
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );


  return (
    <AuthContext.Provider value={{user, setUser}}>
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
