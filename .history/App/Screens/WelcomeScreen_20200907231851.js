import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
resizeMode=
style={styles.imageBgk}
source={require('../assets/salad.jpg')}

>
    
</ImageBackground>
);
}

const styles = StyleSheet.create({
    imageBgk: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "stretch",
        flexDirection: "row"
    }
})
export default WelcomeScreen