import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';

function RecipeCard({image, header}) {
  return (
    <View style={styles.container}>
    <Image source={image} styles={styl/>
    <View>
    <AppTextHeader header={header} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {}
});

export default RecipeCard;