import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
resizeMode="stretch"
style={styles.imageBgk}
source={require('../assets/salad.jpg')}

>
    
</ImageBackground>
);
}

const styles = StyleSheet.create({
    imageBgk: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "stretch",
    }
})
export default WelcomeScreen