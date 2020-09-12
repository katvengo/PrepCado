import React from 'react';
import * as Yup from 'yup'

import { StyleSheet} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'
import Screen from './Screen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(1000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().required().label("Description"),
    
})
const categories = [
    {
        value: 1,
        label: 'Furniture'
    },
    {
        value: 2,
        label: 'Cameras'
    },
    {
        value: 3,
        label: 'Clothes'
    }
]
function ListingEditScreen () { 
return ( 
<Screen style={styles.container}>
<AppForm
initialValues={{
    title: '', 
    price: '', 
    category: null, 
    description: ''}}
onSubmit={(values) => console.log(values)}
validationSchema={validationSchema}
>
<AppFormField
maxLength={255}
placeholder="Title"
name="title"
 />
<AppFormField
keyboardType="numeric"
maxLength={8}
placeholder="Price"
name="price"
 />

<AppFormPicker
items={categories}
name="category"
placeholder="Category"
/>

<AppFormField
maxLength={255}
multiline
numberOfLines={3}
placeholder="Description"
name="description"
 />
<SubmitButton title="Post" />
</AppForm>
</Screen>

);
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
export default ListingEditScreen