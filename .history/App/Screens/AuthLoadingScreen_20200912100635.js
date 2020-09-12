import React from 'react';
import { AsyncStorage, activityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const AuthLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);
export default AuthLoading;