import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userInitialState = {
  id: '1',
  name: 'André Motta',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setId(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    setName(state, action: PayloadAction<{ name: string }>) {
      state.name = action.payload.name;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
