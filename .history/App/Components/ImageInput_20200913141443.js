import React from 'react';
import { View, StyleSheet, Image,
    TouchableWithoutFeedback,
    Alert,} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ImageInput({imageUri, onChangeImage}) {







    
  return 
  
  
  
  <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>}
{imageUri && <Image source={{uri: imageUri}} style={styles.image} /> }
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
  }, 
  image: {
      width: '100%',
      height: '100%'
  }
});

export default ImageInput;