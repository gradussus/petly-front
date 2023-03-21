import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, userLogOut, userLogIn } from './operations';

const authState = {
  token: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: builder =>
    builder
      .addCase(registerNewUser.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(registerNewUser.fulfilled, state => {
        state.error = false;
      })
      .addCase(userLogIn.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(userLogOut.pending, state => {
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
      }),
});

export const authReducer = authSlice.reducer;
