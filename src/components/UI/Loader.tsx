import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export function Loader() {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={64} />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary500,
  },
});
