import React from 'react';
import * as Yup from 'yup'

import { StyleSheet} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../Components/forms'
import Screen from './Screen'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("name"),
    description: Yup.string().required().min(1).max(1000).label("description"),
    category: Yup.object().required().nullable().label("Category"),
    servings: Yup.string().label("servings"),
    prepTime: Yup.string().label("prepTime"),
    cookTime: Yup.string().label("cookTime"),
    ingredients: Yup.string().required().label("ingredients"),
    directions: Yup.string().required().label("directions"),
    image: Yup.string().label("image"),
    
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
    name: '', 
    : '', 
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