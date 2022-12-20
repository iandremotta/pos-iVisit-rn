import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { requestPermission } from '../gelocation/requestPermission';
import { watchGeolocation } from '../gelocation/watchGeolocation';
import { AppContext, initialAppState } from './AppContext';
import { AppNavigator } from './AppNavigator';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { appStore, AppStoreProvider } from './appStore';
import { apolloClient, ApolloProvider } from '../utils/apolliClient';

async function init(): Promise<AppState> {
  const isPermissionGranted = await requestPermission();
  const isLoading = !isPermissionGranted;

  const appState = {
    isLoading,
  };
  return appState;
}

export function App() {
  const [appState, setAppState] = useState(initialAppState);
  const clearWatchIdRef = useRef(() => { });
  const clearWatchId = clearWatchIdRef.current;

  useEffect(() => {
    init().then(appState => {
      setAppState(appState);
      const watchResults = watchGeolocation({
        onPositionChange(coords) {
          setAppState({
            ...appState,
            user: {
              ...appState.user,
              coords,
            },
          });
        },
      });

      clearWatchIdRef.current = watchResults.clearWatchId;
    });

    return () => {
      clearWatchId();
    };
  });

  const nativeBaseTheme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#cfeffd',
        100: '#a0defb',
        200: '#77cff8',
        400: '#44bdfc',
        500: '#1aacf0',
        700: '#0570c9',
        800: '#003b88',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      accent: {
        500: '#e6b30b',
      },
      gray: {
        700: '#221c30',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });

  const navigationTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: nativeBaseTheme.colors.primary[500],
    },
  };

  return (
    <AppStoreProvider store={appStore}>
      <ApolloProvider client={apolloClient}>
        <NativeBaseProvider theme={nativeBaseTheme}>
          <NavigationContainer theme={navigationTheme}>
            <AppContext.Provider value={{ appState, setAppState }}>
              <AppNavigator />
            </AppContext.Provider>
          </NavigationContainer>
        </NativeBaseProvider>
      </ApolloProvider>
    </AppStoreProvider>
  );
}
