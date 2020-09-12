import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextHeader from '../AppTextHeader';

function RecipeCard({image, header}) {
  return (
    <View style={styles.container}>
    <Image source={require(image)}/>
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