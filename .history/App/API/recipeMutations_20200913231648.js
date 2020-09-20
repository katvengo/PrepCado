import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../amplify/backend/api/prepCadoGraphQL/resolvers';

const recipeDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};

const newRecipe = await API.graphql(graphqlOperation(mutations.createRecipe, {input: recipeDetails}));