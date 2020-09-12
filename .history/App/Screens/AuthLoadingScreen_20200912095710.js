import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
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
  </Container>
);
export default AuthLoading;