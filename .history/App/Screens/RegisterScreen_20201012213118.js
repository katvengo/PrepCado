import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import Amplify, { Auth } from 'aws-amplify';

import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton} from '../Components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

/* Sign up function */
async function signUp(email, password, nickname) {
    console.log(email, password)
  try {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        nickname: nickname
      }});
      if()
  } catch (err) { console.log({ err }); }
}

function RegisterScreen (props) { 

return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{email: '', password: '', nickname: ''}}
onSubmit={values => signUp(values.email, values.password, values.nickname)}
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
icon="account"
placeholder="Username"
name="nickname"
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

<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="lock"
name="confirmpassword"
placeholder="Confirm Password"
textContentType="password"
secureTextEntry
/>

<SubmitButton title="Register"/>
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
export default RegisterScreen