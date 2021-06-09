import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={'black'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: '100%',
    width: '100%'
  }
});