import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/Screen'
function Feed(props) {
  return (
    <Screen>
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
  container: {
    flexDirection: ''
  }
});

export default Feed;