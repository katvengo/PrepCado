import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);


  const logIn = (authToken) => {
    const user = authToken
    const token = authToken.accessToken.jwtToken

    const grabUser = async() => {
      let user = await Auth.currentAuthenticatedUser();
      setUser(user, user.idToken.payload);
      authStorage.storeToken(token);
       console.log(grabUser, 'console')
      } 

  
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  


  return { user, logIn, logOut };
};
