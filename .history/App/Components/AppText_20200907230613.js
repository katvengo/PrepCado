import React from 'react';

import { View, Text, Platform, StyleSheet } from 'react-native'

function AppText ({children}) { 
return ( 
<View>
<Text style={[styles.text, style]}>{children}</Text>
</View>
);
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
export default AppText