import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeCard from '../Components/AppRecipes/RecipeCard'
import Screen from '../Screens/Screen'

import Amplify, {API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../aws-exports'
Amplify.configure(config)

import { listRecipes } from '../../src/graphql/queries'
import { FlatList } from 'react-native-gesture-handler';

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
  const { userRecipes, setUserRecipes } = useState();

  useEffect(() => {
    grabRecipesByUser(user.sub)
    .then((result) => {
      const allRecipes = result.data.listRecipes.items
      console.log(allRecipes)
    })  }, []);

  return (
    <Screen style={styles.main}>
       <View style={styles.container}>
       <FlatList
          data={userRecipes}
          keyExtractor={(recipe) => recipe.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              header={item.name}
              // subTitle={"$" + item.ingredients}
              image={item.images[0].url}
              // onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              // thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
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