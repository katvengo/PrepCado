import React from 'react';
import { useFormikContext } from 'formik'
import ButtonComponent from '../ButtonComponent'

function SubmitButton ({title}) { 
    const { handleSubmit } = useFormikContext()
return ( 
<ButtonComponent title={title} onPress={handleSubmit} />

);
}

export default SubmitButton