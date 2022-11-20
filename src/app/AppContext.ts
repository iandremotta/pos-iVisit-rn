import { createContext } from 'react';
import type { AppState } from './types';

export const initialAppState: AppState = {
  isLoading: true,
};

export const AppContext = createContext({
  appState: initialAppState,
  setAppState: (state: AppState) => { },
});
