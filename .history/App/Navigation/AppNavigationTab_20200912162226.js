import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyAccount from '../Screens/MyAccount';
import Feed from '../Screens/Feed';
import Listing from '../Screens/ListingEditScreen';
import colors from '../config/colors'

const Tab = createBottomTabNavigator();

const AppNavigationTab = () => (
    <Tab.Navigator 
    initialRouteName="Feed"

    tabBarOptions = {{showLabel: false}}
    >
     <Tab.Screen name="Feed" component={Feed} 
    options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color='primary' size={40} />
        ),
      
        }}
    />
       <Tab.Screen name="AddRecipes" component={Listing}
     options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="plus" color='primary' size={40} />
        ),
      
        }} />
   <Tab.Screen 
    name="Account" 
    component={MyAccount}
    options={{ 
    tabBarIcon: (color, size) => (
        <MaterialCommunityIcons name="account-circle" color='primary' size={40} />
    ),
  
    }}
     />
</Tab.Navigator>
  
)

export default AppNavigationTab