import React from 'react';

import {View, Text, StyleSheet} from 'react-native'
import Screen from '../Screens/Screen'
import ListItem from '../Components/ListItem'
import colors from '../config/colors'

function MyAccount (props) { 
return ( 
<Screen>
<View style={styles.container}>
    <ListItem 
    image={require('../assets/me.jpg')}
    title={'katvengo'}
    />
</View>
</View>
</Screen>
);
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.light
    },

})
export default MyAccount