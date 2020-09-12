import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'

function Feed(props) {
  return (
    <View style={styles.container}>
      <RecipeCard
       header="Basil"
       image='../ass'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Feed;