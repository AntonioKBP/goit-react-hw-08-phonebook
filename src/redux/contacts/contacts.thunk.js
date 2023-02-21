import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { privateApi } from 'components/http/http';

export const getContactsThunk = createAsyncThunk('contacts', async () => {
  const { data } = await privateApi.get('/contacts');

  return data;
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, phone }) => {
    const { data } = await privateApi.post('/contacts', { id, name, phone });

    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(
      `https://63e666537eef5b22338523c9.mockapi.io/api/contacts-list/contacts/${id}`
    );

    return data;
  }
);

// export const authLogoutThunk = createAsyncThunk('logout', async () => {
//   const { data } = await privateApi.post('/users/logout');

//   token.remove();
//   return data;
// });
