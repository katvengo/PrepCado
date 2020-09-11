import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import AppText from '../Components/AppText'

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
blurRadius={0.5}
resizeMode="cover"
style={styles.imageBgk}
source={require('../assets/pasta.jpg')}
>
<Text style={styles.tagline}>Sell what you don't need</Text>

</ImageBackground>
);
}

const styles = StyleSheet.create({
    imageBgk: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})
export default WelcomeScreen