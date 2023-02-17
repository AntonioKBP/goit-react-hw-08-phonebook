import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import { authLoginThunk } from './auth.thunk';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const register = createAsyncThunk('auth/register', async credentials => { });

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authLoginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(authLoginThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const authReducer = authSlice.reducer;
