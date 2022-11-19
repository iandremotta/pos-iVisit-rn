import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './AppNavigator';

export function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
