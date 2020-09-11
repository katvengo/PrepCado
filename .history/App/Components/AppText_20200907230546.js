import React from 'react';

import { View, Text, Platform } from 'react-native'

function AppText ({children}) { 
return ( 
<View>
<Text>{children}</Text>
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