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
<View style={styles.subContainer}>

</View>
</Screen>
);
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white
    },
    subContainer: {
        padding: 10,
        marginBottom
        backgroundColor: colors.white,
        width: '100%'
    },

})
export default MyAccount