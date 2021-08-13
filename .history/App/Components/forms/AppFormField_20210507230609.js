import React from 'react';

import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

function AppFormField ({name, icon, ...otherProps}) { 
   const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
return ( 
<>
<AppTextInput
placeholder={name}
onChangeText={handleChange(name)}
onBlur={() => setFieldTouched(name)}
name={icon}
{...otherProps}
/>
{ touched[name] && <ErrorMessage error={errors[name]} />
}</>
);
}

export default AppFormField