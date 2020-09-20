import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../';

const todoDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};

const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));