import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ImageInput(props) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100
  }
});

export default ImageInput;