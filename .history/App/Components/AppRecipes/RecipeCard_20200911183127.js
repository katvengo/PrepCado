import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';
import AppText from '../AppText';
import ButtonComponent from '../ButtonComponent';

import colors from '../../config/colors'

function RecipeCard({image, header, description, tags}) {
  return (
    <>
    <Image source={image} style={styles.image}/>
    <View style={styles.container}>
    <View style={styles.firstContainer}>
    <AppTextHeader header={header} />
    <AppText>{description}</AppText>
    <AppText>{tags}</AppText>
    </View>
    <ButtonComponent title="Get Recipe" size={120} radius={5} fontSize={12} color="primary" />
    </View>
</>
  );
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 15,
      backgroundColor: colors.white,
      marginBottom: 20,
      overflow: 'hidden'

    },
    firstContainer: {
        width: 200,
        justifyContent: 'flex-start',
        alignSelf: 'auto',
        borderRadius: 10,
    },
  image: {
    width: '100%',
    height: 200
  },
  button: {
      width: "50%"
  }
});

export default RecipeCard;