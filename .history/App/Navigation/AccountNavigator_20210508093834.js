import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/MyAccount";
import MessagesScreen from "../Screens/MessagesScreen";
import MyAccountScreen from "../Screens/MyAccountSettings";

const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyAccountSettings" component={MyAccountScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;