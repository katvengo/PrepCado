import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerActions} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Settings from '../Screens/MyAccountSettings';

import colors from '../config/colors'
import { ColorPropType } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator 
    drawer
    >
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
)

export default DrawerNavigation

