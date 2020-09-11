import React from 'react';

import { View, Text } from 'react-native'

function AppText ({children}) { 
return ( 
<View>
<Text>{children}</Text>
</View>
);
}

const styles = StyleSheet.create({
    
})
export default AppText