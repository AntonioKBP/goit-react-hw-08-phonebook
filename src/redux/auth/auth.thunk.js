import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { publicApi } from 'components/http/http';
import { token } from 'components/http/http';

export const authLoginThunk = createAsyncThunk('login', async values => {
  const { data } = await publicApi.post('/users/login', values);
  token.set(data.token);
  return data;
});
