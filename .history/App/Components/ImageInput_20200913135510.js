import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ImageInput({imageUri}) {
  return <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>}
  </View>

}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100
  }
});

export default ImageInput;