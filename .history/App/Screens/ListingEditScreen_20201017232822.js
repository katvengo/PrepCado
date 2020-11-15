import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import { Storage} from 'aws-amplify';
import Amplify, { API,  graphqlOperation } from '@aws-amplify/api';
import config from '../../aws-exports'
Amplify.configure(config)


import { StyleSheet, View, fs} from 'react-native'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../Components/forms'
import Screen from './Screen'
import FormImagePicker from '../Components/forms/FormImagePicker'
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
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
    images: Yup.array().min(1, "Please select at least one image."),
    
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
        value: 4,
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

// async function currentUser (sub) {
//     // const grabCurrentUser = await API.graphqlOperation({ getUser, id: id });
//     const result = await API.graphql(graphqlOperation(getUser, {id: sub}))
//       setUserId(result.id)
//   }

function ListingEditScreen () { 
const { user, logOut } = useAuth();
// currentUser(user.sub)
const location = useLocation();
const [uploadVisible, setUploadVisible] = useState(false);
const [progress, setProgress] = useState(0);
const [ userImages, setUserImages] = useState([])

const imageArray = []

const handleSubmit = async (recipe, {resetForm} ) => {

    const imagePath = recipe.images

    async function storeImage(image, i) {

    try {
        const response = await fetch(image);
        const blob = await response.blob();
        return Storage.put(recipe.name + 'Image' + '.png', blob, {
                ContentType: 'image/png',
                key: recipe.name + 'Image' + i + '.png',
        })
    
    } catch (err) {
        console.log('err');
        console.log(err);
    }
    }

    function doAsyncPromises(array) {
        const promises = []

        for (let i = 0; i < array.length; i++) {
            const image = array[i];
            promises.push(storeImage(image, i).then((result) => {
                console.log(result )
                const baseUrl = `https://prepcadoimages211300-dev.s3-us-west-2.amazonaws.com/`
                 const name = recipe.name + 'Image' + result + '.png'
                const objectUrl = baseUrl + name
                return objectUrl
            
            }))

        }
        console.log(promises)
        Promise.all(promises)
        .then((result) => {
            console.log(result, 'result of all promises')
        })
        .catch((e) => {
            console.log(e)
        })
    }

    doAsyncPromises(imagePath)
  
    // setProgress(0);
    // setUploadVisible(true);
 
    // const result = await API.graphql(graphqlOperation(createRecipe, {input: {type: 'post', images: userImages, ...recipe}}, (progress) => setProgress(progress)))
    // console.log(result, 'full api result')

    // if(!result) {
    //     console.log(!result)
    //     setUploadVisible(false);
    //     return alert('Could not save Recipe')
    // } else if (result){
    //     alert('Recipe updated successfully')
    //     resetForm();
    // }
   
    
    // try {
    //     const recipeData = await API.graphql(graphqlOperation(createRecipe, {input: data}))
    //     console.log(recipeData)
    // } catch (err) {console.log(err)}
}

return ( 
<Screen style={styles.container}>
<UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
<AppForm
initialValues={{
    name: '', 
    servings: '', 
    prepTime: '', 
    cookTime: '', 
    ingredients: '', 
    category: '', 
    description: '',
    directions: '',
    images: [],
    userId: user.sub
}
}
onSubmit={handleSubmit}
validationSchema={validationSchema}
>
<FormImagePicker name="images" />
<AppFormField
maxLength={255}
placeholder="Name"
name="name"
 />

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