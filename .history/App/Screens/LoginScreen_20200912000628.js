import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import { Auth } from 'aws-amplify';


import Screen from './Screen'
import { AppForm, AppFormField, SubmitButton} from '../Components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

async function signIn(username, password) {
    try {
      await Auth.signIn(username, password);
      /* Once the user successfully signs in, update the form state to show the signed in state */
          <AppNavigationTab /> */}

    } catch (err) { console.log({ err }); }
  }

function LoginScreen (props) { 

return ( 
<Screen style={styles.container}>
    <Image style={styles.logo}
    source={require('../assets/avocado.jpg')} />
<AppForm
initialValues={{email: '', password: ''}}
onSubmit={values => signIn(values.username, values.password)}
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