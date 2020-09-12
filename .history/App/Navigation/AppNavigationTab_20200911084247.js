import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import MyAccount from '../Screens/MyAccount';
import MyAccount from '../Screens/MyAccount';

const Tab = createBottomTabNavigator();

const AppNavigationTab = () => {
    <Tab.Navigator>
        <Tab.Screen name="Account" component={MyAccount} />
        <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
}

export default AppNavigationTab