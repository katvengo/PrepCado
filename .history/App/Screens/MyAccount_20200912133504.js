import React from 'react';

import {View, Text, StyleSheet} from 'react-native'
import Screen from '../Screens/Screen'
import ListItem from '../Components/ListItem'
import colors from '../config/colors'
import useAuth from "../Auth/useAuth";

function MyAccount (props) { 
    const { user, logOut } = useAuth();

return ( 
<Screen>
<View style={styles.container}>
    <ListItem 
    image={require('../assets/me.jpg')}
    title={'katvengo'}
    />
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
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
        margin: 15,
        marginTop: 100,
        backgroundColor: colors.white
    },
    subContainer: {
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
        margin: 15,
        backgroundColor: colors.white,
     },

})
export default MyAccount