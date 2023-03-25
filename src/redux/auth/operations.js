import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
      console.log(response.data.token);
      return response.data;
    } catch {
      return rejectWithValue(
        'Sorry, we were unable to create a new account. Please try again.'
      );
    }
  }
);

export const userLogIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/login', credentials);
      return response.data;
    } catch {
      return rejectWithValue('Failed to login. Please try again.');
    }
  }
);

export const userLogOut = createAsyncThunk(
  'auth/logOut',
  async (token, { rejectWithValue }) => {
    try {
      await axios.post('api/auth/logout', token, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch {
      return rejectWithValue('Failed to log out. Please try again.');
    }
  }
);
