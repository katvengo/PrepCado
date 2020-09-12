import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/Screen'
function Feed(props) {
  return (
    <Screen style={styles.main}>
       <View style={styles.container}>
      <RecipeCard
       header="Basil"
       image={require('../assets/basil.jpg')}
      />
      <RecipeCard
       header="Basil"
       image={require('../assets/basil.jpg')}
      />
    </View>
    </Screen>
   
  );
}

const styles = StyleSheet.create({
  main: {
    flexWrap: "wrap"
  },
  container: {
    margin: 20
  }
});

export default Feed;