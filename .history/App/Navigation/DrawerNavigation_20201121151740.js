import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Settings from '../Screens/MyAccountSettings';

import colors from '../config/colors'
import { ColorPropType } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator>
      <MaterialCommunityIcons 
            name="view-headline" 
            color={colors.dark} 
            size={30} 
            onPress={() => {<DrawerNavigation></DrawerNavigation>}}
            style={styles.setting}
          >
    <Drawer.Screen name="Settings" component={Settings} /></MaterialCommunityIcons>
  </Drawer.Navigator>
)

export default DrawerNavigation

