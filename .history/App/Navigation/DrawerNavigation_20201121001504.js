import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import MyAccount from '../Screens/MyAccount';
import Feed from '../Screens/Feed';
import Listing from '../Screens/ListingEditScreen';
import Settings from '../Screens/ListingEditScreen';
import colors from '../config/colors'
import { ColorPropType } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator>
    <Drawer.Screen name="settings" component={Settings} />
  </Drawer.Navigator>
)

export default DrawerNavigation

