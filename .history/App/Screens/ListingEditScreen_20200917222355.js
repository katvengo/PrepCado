import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import Amplify, {API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../aws-exports'
Amplify.configure(config)

import { StyleSheet, View} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../Components/forms'
import Screen from './Screen'
import FormImagePicker from '../Components/forms/FormImagePicker'
import { createRecipe } from '../../src/graphql/mutations'
import { listRecipes } from '../../src/graphql/queries'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    description: Yup.string().required().min(1).max(1000).label("Description"),
    category: Yup.object().label("Category"),
    servings: Yup.string().label("Servings"),
    prepTime: Yup.string().label("Preparation Time"),
    cookTime: Yup.string().label("Cook Time"),
    ingredients: Yup.string().required().label("Ingredients"),
    directions: Yup.string().required().label("Directions"),
    images: Yup.array(),
    
})
const categories = [
    {
        value: 1,
        label: 'Healthy'
    },
    {
        value: 2,
        label: 'Seafood'
    },
    {
        value: 3,
        label: 'Chicken'
    },
    {
        value: 3,
        label: 'Meat'
    }
]
// const initialRecipeState = {

// }
// addRecipe = async (recipe) => {
//     try {
//         const result = newRecipe(recipe)
//         console.log(result, 'success')
//     } catch (err) {
//         console.log('error: ', err)
//     }
    
// }
handleSubmit = (recipe) => {
    console.log(recipe)
}
function ListingEditScreen () { 
const [recipe, setRecipe] = useState([])
// useEffect(() => {
//     fetchRecipes()
// }, [])

async function addRecipes(data) {
    console.log(data)
    console.log(data.category)
    try {
        const recipeData = await API.graphql(graphqlOperation(createRecipe, {input}))
        console.log(recipeData)
    } catch (err) {console.log(err)}
}

return ( 
<Screen style={styles.container}>
<AppForm
initialValues={{
    name: '', 
    servings: '', 
    prepTime: '', 
    cookTime: '', 
    ingredients: '', 
    category: null, 
    description: '',
    directions: '',
    images: [],
    owner: 'Owner',
}
}
onSubmit={addRecipes}
validationSchema={validationSchema}
>
<AppFormField
maxLength={255}
placeholder="Name"
name="name"
 />
<FormImagePicker name="images" />

<AppFormField
maxLength={255}
multiline
numberOfLines={3}
placeholder="Description"
name="description"
 />
 <AppFormPicker
items={categories}
name="category"
placeholder="Category"
/>
<AppFormField
maxLength={255}
placeholder="Servings"
name="servings"
 />
<AppFormField
maxLength={255}
placeholder="Preparation Time"
name="prepTime"
 />
<AppFormField
maxLength={255}
placeholder="Cooking Time"
name="cookTime"
 />
<AppFormField
maxLength={255}
placeholder="Ingredients"
name="ingredients"
 />
<AppFormField
maxLength={255}
multiline
numberOfLines={3}
placeholder="Directions"
name="directions"
 />
<View style={styles.submit}>
  <SubmitButton title="Add" size={300} radius={10} fontSize={18}/>
  
</View>
</AppForm>
</Screen>

);
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    submit: {
        justifyContent: 'center',
        alignSelf: 'center'
    }

})
export default ListingEditScreen