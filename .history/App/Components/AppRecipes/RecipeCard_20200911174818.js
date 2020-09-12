import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';
import AppText from '../AppText';
import ButtonComponent from '../ButtonComponent';

function RecipeCard({image, header, description, tags}) {
  return (
    <View style={styles.container}>
    <View>
    <Image source={image} style={styles.image}/>
    </View>
    <View style={styles.firstContainer}>
    <AppTextHeader header={header} />
    <AppText>{description}</AppText>
    <AppText>{tags}</AppText>
    </View>
    <ButtonComponent title="Get Recipe" size={150}/>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%'
    },
    firstContainer: {
        width: 200,
        justifyContent: 'flex-start',
        alignSelf: 'auto'
    },
  image: {
      width: 150,
      height: 150,
      borderRadius: 25
  },
  button: {
      width: "50%"
  }
});

export default RecipeCard;