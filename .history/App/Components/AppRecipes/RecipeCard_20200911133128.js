import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';
import AppText from '../AppText';

function RecipeCard({image, header, description, tags,}) {
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
        justifyContent: 'center'
    },
  image: {
      width: 175,
      height: 175,
      borderRadius: 25
  }
});

export default RecipeCard;