import React from 'react';
import { StyleSheet} from 'react-native'
import { useFormikContext } from 'formik'
import ButtonComponent from '../ButtonComponent'

function SubmitButton ({title}) { 
    const { handleSubmit } = useFormikContext()
return ( 
<ButtonComponent title={title} onPress={handleSubmit} style={styles.submit}/>

);
}

export default SubmitButton