import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function AppTextHeader({header}) {
  return (
      <View style={styles.headerComponent}>
        <AppText style={styles.header}>{header}</AppText>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
      fontSize: 25,
      fontWeight: '900'
  },
  headerComponent: {
      backgroundColor: 
  }
});

export default AppTextHeader;