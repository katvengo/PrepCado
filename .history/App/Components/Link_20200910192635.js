import React from 'react';

import {View} from 'react-native'
import ButtonComponent from '../Components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation()

function Link ({name, navLink}) { 
return ( 
<ButtonComponent
name={name}
onPress={}
/>

);
}

export default Link