import React from 'react';

import {View, Text, StyleSheet} from 'react-native'
import Screen from '../Screens/Screen'
import ListItem from '../'
function MyAccount (props) { 
return ( 
<Screen>
<View style={styles.container}>
    <Text>My Account</Text>
</View>
</Screen>

);
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default MyAccount