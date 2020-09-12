import React from 'react';

import {createTBottomabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
    <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
}

export default AuthNavigator