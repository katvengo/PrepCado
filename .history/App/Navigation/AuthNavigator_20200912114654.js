import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const StackTwo = createStackNavigator();

const AuthNavigator = () => (

    <StackTwo.Navigator>
        <StackTwo.Screen name="Welcome" component={WelcomeScreen} />
        <StackTwo.Screen name="Login" component={LoginScreen} />
        <StackTwo.Screen name="Register" component={RegisterScreen} />
    </StackTwo.Navigator>

)

export default AuthNavigator