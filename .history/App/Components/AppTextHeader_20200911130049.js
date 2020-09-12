import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function AppTextHeader({header}) {
  return (
      <View>
          
      </View>
  <AppText style={styles.header}>{header}</AppText>
  );
}

const styles = StyleSheet.create({
  header: {
      fontSize: 25,
      fontWeight: '900'
  }
});

export default AppTextHeader;