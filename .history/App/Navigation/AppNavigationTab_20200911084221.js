import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

const AppNavigationTab = () => {
    <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Account" component={RegisterScreen} />
    </Tab.Navigator>
}

export default AppNavigationTab