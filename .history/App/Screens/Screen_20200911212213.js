import React from 'react';
import Constants from 'expo-constants'
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native'

import {View} from 'react-native'
import colors from '../StyleSheets/colors';

function Screen ({children}) { 
return ( 
<SafeAreaView style={styles.screen} >
    <ScrollView>
            {children}

    </ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: colors.light,
        padding: 10
    }
})
export default Screen