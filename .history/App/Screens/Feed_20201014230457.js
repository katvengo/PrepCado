import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/Screen'

import Amplify, {API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../aws-exports'
Amplify.configure(config)

import { listRecipes } from '../../src/graphql/queries'

async function grabRecipesByUser (sub) {
  const result = await API.graphql(graphqlOperation(listRecipes, {authorRecipe: sub}))
  return result
}

// API.graphql({
//   query: onCommentByPostId,
//   variables: {
//     postCommentsId: "12345"
//   }
// })
// .subscribe({
//   next: data => {
//     console.log('data: ', data)
//   }
// })


function Feed(props) {
  const { user, logOut } = useAuth();
  const { userRecipe, setUserRecipes } = useAuth();
  grabRecipesByUser(user.sub)
  .then((result) => {
    console.log(result.data.listRecipes)
    console.log(result.data.listRecipes.items[0])
    //console.log(data.listRecipes)
    // console.log(data.listRecipes.items)
  })
  return (
    <Screen style={styles.main}>
       <View style={styles.container}>
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
  },
});

export default Feed;