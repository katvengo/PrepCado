import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextHeader from '../AppTextHeader';

function RecipeCard({image, header}) {
  return (
    <View style={styles.container}>
        <View>
               <Image source={image} style={styles.image}/>
 
        </View>
    <View>
    <AppTextHeader header={header} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
      width: 100,
      height: 70
  }
});

export default RecipeCard;