import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
blurRadius={5}
resizeMode="cover"
style={styles.imageBgk}
source={require('../assets/pasta.jpg')}
>
<View style={styles.logoContainer}>
<Text style={styles.tagline}>PrepCado</Text>
</View>
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
        fontSize: 60,
        fontWeight: '600',
        paddingVertical: 20,
        lineHeight: 60,
        color: '#008B7B',
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
})
export default WelcomeScreen