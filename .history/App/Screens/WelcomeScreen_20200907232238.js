import React from 'react';

import { ImageBackground, StyleSheet, View, Text, Image} from 'react-native';

function WelcomeScreen (props) { 
return ( 
<ImageBackground 
blurRadius={2}
resizeMode="cover"
style={styles.imageBgk}
source={require('../assets/pasta.jpg')}

>
    
</ImageBackground>
);
}

const styles = StyleSheet.create({
    imageBgk: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    }
})
export default WelcomeScreen