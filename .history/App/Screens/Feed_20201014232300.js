import React, {useState}from 'react';
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
    getListingsApi.request();
  }, []);


  return (
    <Screen style={styles.main}>
       <View style={styles.container}>
         <FlatList
         data={allRecipes}
         >
           renderItem={(item) => {
            <RecipeCard
       header={item.name}
       image={require('../assets/basil.jpg')}
       
      /> 
           }}
         </FlatList>
      
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