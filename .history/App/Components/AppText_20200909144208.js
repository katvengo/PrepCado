import React from 'react';

import { View, Text, Platform, StyleSheet } from 'react-native'
import defaultStyles from '../config/styles'

function AppText ({children, style }) { 
return ( 
<Text style={[styles.text, style]}>{children}</Text>
);
}

const styles = StyleSheet.create({

})
export default AppText