import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify';

import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton} from '../Components/forms'

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

/* Sign up function */
async function signUp() {
  try {
    await Auth.signUp({
      username: formInputState.username,
      password: formInputState.password,
      attributes: {
        email: formInputState.email
      }});
    /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
    formState = "confirmSignUp";
  } catch (err) { console.log({ err }); }
}

function RegisterScreen (props) { 

return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{name: '', email: '', password: ''}}
onSubmit={values => console.log(values)}
validationSchema={validationSchema}
>
<AppFormField
autoCapitalize="none"
autoCorrect={false}
icon="account-box"
placeholder="Name"
name="name"
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

<SubmitButton title="Register" onPress={() => {}}/>
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