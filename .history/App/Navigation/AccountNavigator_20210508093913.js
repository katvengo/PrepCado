import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AccountScreen from "../Screens/MyAccount";
import MessagesScreen from "../Screens/MessagesScreen";
import MyAccountScreen from "../Screens/MyAccountSettings";


const Tab = createMaterialTopTabNavigator();

function MAccountNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
// const AccountNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Account" component={AccountScreen} />
//     <Stack.Screen name="Messages" component={MessagesScreen} />
//     <Stack.Screen name="MyAccountSettings" component={MyAccountScreen} />
//   </Stack.Navigator>
// );

export default AccountNavigator;