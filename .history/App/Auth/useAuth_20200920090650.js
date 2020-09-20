import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    console.log(authToken)
    const user = authToken.email
    const token = authToken.accessToken.jwtToken
    // const user = jwtDecode(token);
    // console.log(user)
    // setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };


  return { user, logIn, logOut };
};
