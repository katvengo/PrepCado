import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';
import AppText from '../AppText';

function RecipeCard({image, header}) {
  return (
    <View style={styles.container}>
    <View>
    <Image source={image} style={styles.image}/>
    </View>
    <View style={styles.firstContainer}>
    <AppTextHeader header={header} />
    <AppText />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    firstContainer: {
        width: 200,
        minHeight: 200 
    },
  image: {
      width: 200,
      height: 200
  }
});

export default RecipeCard;