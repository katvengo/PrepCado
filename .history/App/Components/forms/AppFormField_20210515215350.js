import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const Example = () => {

function AppFormField ({ name, width, ...otherProps}) { 
   const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
return ( 
<>
<AppTextInput
placeholder={name}
onChangeText={handleChange(name)}
onBlur={() => setFieldTouched(name)}
width={width}
{...otherProps}
/>
{ touched[name] && <ErrorMessage error={errors[name]} />
}</>
);
}

export default AppFormField