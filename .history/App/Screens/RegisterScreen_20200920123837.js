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
async function signUp(email, password, chosenUsername) {
    console.log(email, password, chosenUsername)
  try {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
        preferred_username: chosenUsername
      }});
      console.log('finished')

  } catch (err) { alert({ err }); }
}

function RegisterScreen (props) { 

return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{email: '', password: '', chosenUsername: ''}}
onSubmit={values => signUp(values.email, values.password, values.chosenUsername)}
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