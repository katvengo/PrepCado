import { API, graphqlOperation } from "aws-amplify";
import * as mutations from './graphql/mutations';

// const todoDetails = {
//   name: 'Todo 1',
//   description: 'Learn AWS AppSync',
//   category
//   servings
//   prepTime
//   cookTime
//   ingredients
//   directions
//   images
// };


const newRecipe = await API.graphql(graphqlOperation(mutations.createRecipe));

export default {
    newRecipe
}