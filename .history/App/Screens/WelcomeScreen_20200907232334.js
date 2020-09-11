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
<AppText>PrepCado</AppText> 
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