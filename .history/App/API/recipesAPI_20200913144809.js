import { API } from 'aws-amplify';
import { create, update, deleteRecipe } from '../../amplify/backend/api/prepCadoGraphQL/resolvers/mutations';


const Recipe = { 
    name: "My first Recipe", 
    description: "Hello world!",
    servings: '', 
    prepTime: '', 
    cookTime: '', 
    ingredients: '', 
    category: null, 
    directions: '',
    image: ''
};




/* create a Recipe */
const create = await API.graphql(graphqlOperation(createRecipe, {input: Recipe}));

/* update a Recipe */
const update = await API.graphql(graphqlOperation(updateRecipe, { input: { id: RecipeId, name: "Updated Recipe info" }}));

/* delete a Recipe */
const deleteRecipe = await API.graphql(graphqlOperation(deleteRecipe, { input: { id: RecipeId }}));


export default recipesAPI