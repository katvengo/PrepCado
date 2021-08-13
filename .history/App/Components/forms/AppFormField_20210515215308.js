import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

const Example = () => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

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