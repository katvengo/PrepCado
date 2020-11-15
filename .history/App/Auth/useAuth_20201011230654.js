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
     console.log(grabUser, 'console')
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

    const grabUser = async() => {
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      console.log(attributes)
    } 
    grabUser()
  })

  return { user, logIn, logOut };
};
