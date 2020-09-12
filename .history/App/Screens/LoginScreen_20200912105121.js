import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify';
import AppNavigationTab from '../Navigation/AppNavigationTab'
import jwtDecode from 'jwt-decode'

import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton} from '../Components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

async function signIn(email, password) {
    try {
      const auth = await Auth.signIn(email, password);
      /* Once the user successfully signs in, update the form state to show the signed in state */
    //   console.log(auth);
      const access = auth.signInUserSession
      const token = access.accessToken.jwtToken
    
      if(token !== null) {
        console.log('user signed in successfully')

    }
    } catch (e) {
      alert(e.message);
      setLoginFailed(false)
   }    
    }  

function LoginScreen (props) { 
const [loginFailed, setLoginFailed] = useState(false)
const [loginSuccess, setLoginSuccess] = useState(false)
return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{email: '', password: ''}}
onSubmit={values => signIn(values.email, values.password)}
validationSchema={validationSchema}
>
<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="email"
placeholder="Email"
keyboardType="email-address"
name="email"
/>

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="lock"
name="password"
placeholder="Password"
textContentType="password"
secureTextEntry
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