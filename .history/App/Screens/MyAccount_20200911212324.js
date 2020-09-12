import React from 'react';

import {View, Text} from 'react-native'
import Screen from '../Screens/Screen'

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

    }
})
export default MyAccount