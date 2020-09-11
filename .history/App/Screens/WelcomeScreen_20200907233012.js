import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
blurRadius={0.5}
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
        fontSize: 40,
        fontWeight: '600',
        paddingVertical: 20
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
})
export default WelcomeScreen