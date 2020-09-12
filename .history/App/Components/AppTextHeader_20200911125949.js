import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function AppTextHeader(props) {
  return (
  <AppText></AppText>
  );
}

const styles = StyleSheet.create({
  header: {
      fontSize: 25,
      fontWeight: '900'
  }
});

export default AppTextHeader;