import React from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native';

// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Feed from "../Screens/Feed";
import MessagesScreen from "../Screens/MessagesScreen";
import MyAccountScreen from "../Screens/MyAccountSettings";

import colors from '../config/colors'

const Tab = createMaterialTopTabNavigator();

const PrepCadoTopBar = () => (
  <>
  <View>
<Text>
  PrepCado
  </Text> 
   </View>
    <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions= {{
      style: { marginTop: 30},
      showIcon: true,
      showLabel: false,
    }}
    >

      <Tab.Screen name="Feed" component={Feed}   
      options={{ 
        tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color={colors.primary} size={25} />
        ),
      
        }} />

    </Tab.Navigator>
</>
)
const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 15,
    marginTop: 50,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column'
  },
  subContainer: {
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
    margin: 15,
    backgroundColor: colors.white,

  },
  right: {
    alignSelf: 'flex-end',
    marginTop: -35,

    
  },
  left: {
    alignSelf: 'flex-start',
    
  },
  heading: {
    flex: 1,
  },


export default PrepCadoTopBar;