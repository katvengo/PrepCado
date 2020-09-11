import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
style={styles.imageBgk}
source={require('../assets/salad.jpg')}

>
    
</ImageBackground>
);
}

const styles = StyleSheet.create({
    imageBgk: {
        flex: 0.5,
        height: 100%''
        justifyContent: "flex-end",
        alignItems: "center",
    }
})
export default WelcomeScreen