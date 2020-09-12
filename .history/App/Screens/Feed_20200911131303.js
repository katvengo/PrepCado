import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/'
function Feed(props) {
  return (
    <View style={styles.container}>
      <RecipeCard
       header="Basil"
       image={require('../assets/basil.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Feed;