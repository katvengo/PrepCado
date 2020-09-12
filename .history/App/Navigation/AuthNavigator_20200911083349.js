const { createStackNavigator } = require("@react-navigation/stack");

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const AuthNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}
    </Stack.Navigator>
}