import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../amplify/backend/api/prepCadoGraphQL/';

const todoDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};

const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));