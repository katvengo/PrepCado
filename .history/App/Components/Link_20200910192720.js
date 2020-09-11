import React from 'react';

import {View} from 'react-native'
import ButtonComponent from '../Components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation()

function Link ({name, navLink}) { 
return ( 
<ButtonComponent
title={name}
onPress={() => navigation.navigate(navLink)}
/>

);
}

export default Link