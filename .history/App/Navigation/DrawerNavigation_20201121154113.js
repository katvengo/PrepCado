import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import Settings from '../Screens/MyAccountSettings';

import colors from '../config/colors'
import { ColorPropType } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator {...props}>
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
)

export default DrawerNavigation

