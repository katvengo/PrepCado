import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

import {API,  graphqlOperation } from '@aws-amplify/api';

import { getUser } from '../../src/graphql/queries'

const grabUserInfo = async function currentUser (sub) {
  console.log(sub)
  // const grabCurrentUser = await API.graphqlOperation({ getUser, id: id });
  const result = await API.graphql(graphqlOperation(getUser, {id: sub}))

  console.log(result)
  console.log(result.id)
return result
}

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = authToken
    const userInfo = user.idToken.payload
    currentUser(userInfo.sub)
    const token = authToken.accessToken.jwtToken
    setUser(user.idToken.payload);
    authStorage.storeToken(token);
     console.log(grabUser, 'console')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };



  return { user, logIn, logOut };
};
