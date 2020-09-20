import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = authToken
    const token = authToken.accessToken.jwtToken
    setUser(user.idToken.payload);
    authStorage.storeToken(token);

    const grabUser = async () => {
      const result = await API.graphql(graphqlOperation(getUser, {id: '420d0ce1-7f73-4317-8ad6-e2d7080a5a5f'}) )
      console.log(result)
     }

     grabUser()
     console.log(grabUser, 'console')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };


  return { user, logIn, logOut };
};
