import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { appReducer } from './appSlice';
import { userReducer } from '../user/userSlice';
export { Provider as AppStoreProvider } from 'react-redux';
export { userActions } from '../user/userSlice';
export { appActions } from './appSlice';

export const appStore = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  devTools: true,
});

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;

export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;

export type AppStore = ReturnType<typeof appStore.getState>;
