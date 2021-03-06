import { API } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from '../../amplify/backend/api/prepCadoGraphQL/resolvers/mutations';


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
const update =await API.graphql(graphqlOperation(updateRecipe, { input: { id: RecipeId, name: "Updated Recipe info" }}));

/* delete a Recipe */
const delete = await API.graphql(graphqlOperation(deleteRecipe, { input: { id: RecipeId }}));




const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));