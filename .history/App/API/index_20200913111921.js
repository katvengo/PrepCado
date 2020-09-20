import { API } from 'aws-amplify';
import { createRecipe, updateRecipe, deleteRecipe } from './graphql/mutations';

const recipes = {
    id: ID,
    owner: String
    timestamp: AWSTimestamp!
    name: String
    servings: String
    prepTime: String, 
    cookTime: String, 
    ingredients: String, 
    category: String,
    description: String
    directions: String
    image: String
 };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));