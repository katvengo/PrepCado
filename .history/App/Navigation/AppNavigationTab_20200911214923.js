import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import MyAccount from '../Screens/MyAccount';
import Feed from '../Screens/Feed';
import Listing from '../Screens/ListingEditScreen';

const Tab = createBottomTabNavigator();

const AppNavigationTab = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen name="Account" component={MyAccount} />
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="AddRecipes" component={Feed} />
</Tab.Navigator>
  )
}

export default AppNavigationTab