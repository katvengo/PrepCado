const { createStackNavigator } = require("@react-navigation/stack");

import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={WelcomeScreen} />
    </Stack.Navigator>
}