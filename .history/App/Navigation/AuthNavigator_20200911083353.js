const { createStackNavigator } = require("@react-navigation/stack");

import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
}