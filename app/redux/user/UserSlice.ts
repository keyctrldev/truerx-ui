import { Draft, PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';

import { AuthUser } from '../../types/GlobalTypes';

interface UserInitialState {
  currentUserId: string | null;
  currentUser: AuthUser;
}

const initialState: UserInitialState = {
  currentUserId: null,
  currentUser: {} as AuthUser,
};

const userSlice: Slice<UserInitialState> = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state: Draft<UserInitialState>, action: PayloadAction<AuthUser>) => {
      state.currentUser = action?.payload;
    },
    setCurrentUserId: (state: Draft<UserInitialState>, action: PayloadAction<string | null>) => {
      state.currentUserId = action?.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
