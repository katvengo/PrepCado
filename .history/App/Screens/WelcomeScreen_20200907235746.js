import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
blurRadius={1}
resizeMode="cover"
style={styles.imageBgk}
source={require('../assets/salad.jpg')}
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
        paddingVertical: 50,
        lineHeight: 60,
        color: '#008B7B',
        fontWeight: '900',
        textTransform: 'uppercase',
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontStyle: 'italic',
        textShadowRadius: 1,
        textShadowColor: '#F5F5F5',
        text

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
})
export default WelcomeScreen