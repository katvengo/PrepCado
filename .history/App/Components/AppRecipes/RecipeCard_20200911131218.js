import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';

function RecipeCard({image, header}) {
  return (
    <View style={styles.container}>
    <Image source={image} style={styles.image}/>
    <View>
    <AppTextHeader header={header} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  imag: {}
});

export default RecipeCard;