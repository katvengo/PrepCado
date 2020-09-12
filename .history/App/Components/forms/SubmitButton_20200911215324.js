import React from 'react';
import { StyleSheet} from 'react-native'
import { useFormikContext } from 'formik'
import ButtonComponent from '../ButtonComponent'

function SubmitButton ({title, size, radius, fontSize}) { 
    const { handleSubmit } = useFormikContext()
return ( 
<ButtonComponent title={title} onPress={handleSubmit} size, radius, fontSize/>

);
}

export default SubmitButton