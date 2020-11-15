import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";
import Amplify, {API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../aws-exports'
Amplify.configure(config)

import { getUser } from '../../src/graphql/queries'

// async function currentUser (sub) {
//   console.log(sub)
//   // const grabCurrentUser = await API.graphqlOperation({ getUser, id: id });
//   const result = await API.graphql(graphqlOperation(getUser, {id: sub}))

//   return result
// }
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = authToken
    const userInfo = user.idToken.payload
    console.log(userInfo)
    const sub = userInfo.sub
    currentUser(sub)
    .then((data) => {
      setUser(userInfo, data);
    })
    const token = authToken.accessToken.jwtToken
    authStorage.storeToken(token);
    console.log(grabUser, 'console')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };



  return { user, logIn, logOut };
};
