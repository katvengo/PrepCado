import { API, graphqlOperation } from "aws-amplify";
import * as mutations from './graphql/mutations';

const todoDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};


const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));