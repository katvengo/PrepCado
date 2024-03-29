import React, {useContext, useState} from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'

import { Auth } from 'aws-amplify';
import jwtDecode from 'jwt-decode'

import Screen from './Screen'
import { 
AppForm, AppFormField, SubmitButton, ErrorMessage,
} from '../Components/forms'
import AuthContext from '../Auth/context';
import useAuth from "../Auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})



function LoginScreen (props) { 
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async({email, password}) => {
        console.log(email, password)
          const result = await Auth.signIn(email, password);
          console.log(result)
          /* Once the user successfully signs in, update the form state to show the signed in state */
          const access = result.signInUserSession
          //const token = access.accessToken.jwtToken
        if (!access) return setLoginFailed(true);
          setLoginFailed(false);
          auth.logIn(token);
          
        } 
return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{email: '', password: ''}}
onSubmit={handleSubmit}
validationSchema={validationSchema}
>
<ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="email"
placeholder="Email"
keyboardType="email-address"
name="email"
textContentType="emailAddress"
/>

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="lock"
name="password"
placeholder="Password"
textContentType="password"
secureTextEntry
textContentType="password"

/>

<SubmitButton title="Login"/>
</AppForm>

</Screen>
);
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    container: {
        padding: 10,
    }, 
   
})
export default LoginScreen