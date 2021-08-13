import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AccountScreen from "../Screens/MyAccount";
import MessagesScreen from "../Screens/MessagesScreen";
import MyAccountScreen from "../Screens/MyAccountSettings";


const Tab = createMaterialTopTabNavigator();

function AccountNavigator() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 12 },
      tabStyle: { width: 100 },
      style: { backgroundColor: 'powderblue' },
      initialLayout: { width: Dimensions.get('window').width }}
    }}>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="MyAccountSettings" component={MyAccountScreen}  />

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