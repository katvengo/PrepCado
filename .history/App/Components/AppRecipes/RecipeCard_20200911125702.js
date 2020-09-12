import React from 'react';
import { View, StyleSheet } from 'react-native';

function RecipeCard(props) {
  return (
    <View style={styles.container}>
    <Image source={require('../')}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {}
});

export default RecipeCard;