import React from 'react';
import { View, StyleSheet } from 'react-native';

function RecipeCard({image}) {
  return (
    <View style={styles.container}>
    <Image source={require(image)}/>
    <View>
    <AppText
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {}
});

export default RecipeCard;