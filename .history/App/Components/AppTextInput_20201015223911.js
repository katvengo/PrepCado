import React from 'react';

import {
    View,
    StyleSheet,
    TextInput
} from 'react-native'
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'
import colors from '../config/colors'

function AppTextInput({icon, ...otherProps}) {
    return ( 
    <View style={styles.container}> 
    {icon && <MaterialCommunityIcons name = {icon} size={20} color={colors.medium} style={styles.icon}/>}
    <TextInput 
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput]} {...otherProps}></TextInput>
    </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.light,
            borderRadius: 25,
            flexDirection: 'row',
            width: '100%',
            padding: 15,
            marginVertical: 10
        },
        textInput: {
            color: colors.dark
        },
        icon: {
            marginRight: 10
        }
    })
    export default AppTextInput