import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { requestPermission } from '../gelocation/requestPermission';
import { AppContext, initialAppState } from './AppContext';
import { AppNavigator } from './AppNavigator';

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
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ appState, setAppState }}>
        <AppNavigator />
      </AppContext.Provider>
    </NavigationContainer>
  );
}
