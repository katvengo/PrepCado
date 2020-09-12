import React from 'react';
import { useFormikContext } from 'formik'
import ButtonComponent from '../ButtonComponent'
import styles from '../../config/styles';

function SubmitButton ({title}) { 
    const { handleSubmit } = useFormikContext()
return ( 
<ButtonComponent title={title} onPress={handleSubmit} style={styles.submit}/>

);
}

const styles = StyleSheet.create({
    
})
export default SubmitButton