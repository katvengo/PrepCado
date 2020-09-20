import React, { useEffect } from 'react';
import * as Yup from 'yup'

import { StyleSheet, View} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../Components/forms'
import Screen from './Screen'
import FormImagePicker from '../Components/forms/FormImagePicker'
import API, { graphqlOperation } from '@aws-amplify/api';
// import {createRecipe} from '../../amplify/backend/api/prepCadoGraphQL/resolvers'
import newRecipe from '../API/recipeMutations'

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
// addRecipe = async (recipe) => {
//     try {
//         const result = newRecipe(recipe)
//         console.log(result, 'success')
//     } catch (err) {
//         console.log('error: ', err)
//     }
    
// }
function ListingEditScreen () { 
console.log(newRecipe)
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
    images: [] 
}
}
onSubmit={console.log(newRecipe)}
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