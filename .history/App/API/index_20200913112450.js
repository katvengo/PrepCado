import { API } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from '../../amplify/backend/api/prepCadoGraphQL/resolvers/mutations';

import { createRecipe, updateRecipe, deleteRecipe } from '.';

const Recipe = { 
    name: "My first Recipe", 
    description: "Hello world!" 
};

/* create a Recipe */
await API.graphql(graphqlOperation(createRecipe, {input: Recipe}));

/* update a Recipe */
await API.graphql(graphqlOperation(updateRecipe, { input: { id: RecipeId, name: "Updated Recipe info" }}));

/* delete a Recipe */
await API.graphql(graphqlOperation(deleteRecipe, { input: { id: RecipeId }}));




const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));