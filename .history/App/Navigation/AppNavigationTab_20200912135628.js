import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyAccount from '../Screens/MyAccount';
import Feed from '../Screens/Feed';
import Listing from '../Screens/ListingEditScreen';
import colors from '../config/colors'

const Tab = createBottomTabNavigator();

const AppNavigationTab = () => (
    <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen 
    name="Account" 
    component={MyAccount}
    options={{
    tabBarVisible: 'none',
    tabBarIcon: ({color, size,}) => (
        <MaterialCommunityIcons name="home" color='primary' size={40} />
    )
    
    }}
     />
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="AddRecipes" component={Listing} />
</Tab.Navigator>
  
)

export default AppNavigationTab