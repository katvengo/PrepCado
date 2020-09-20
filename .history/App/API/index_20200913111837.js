import { API } from 'aws-amplify';
import { createRecipe, updateRecipe, deleteRecipes } from './graphql/mutations';

const recipes = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));