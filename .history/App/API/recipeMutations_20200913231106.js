import { API, graphqlOperation } from "aws-amplify";
import * as mutations from './graphql/mutations';

const todoDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};

name
description: Yup.string().required().min(1).max(1000).label("Description"),
category: Yup.object().label("Category"),
servings: Yup.string().label("Servings"),
prepTime: Yup.string().label("Preparation Time"),
cookTime: Yup.string().label("Cook Time"),
ingredients: Yup.string().required().label("Ingredients"),
directions: Yup.string().required().label("Directions"),
images: Yup.array(),
const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));