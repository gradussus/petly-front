import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
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
      setAuthToken(response.data.token);
      return response.data;
    } catch {
      return rejectWithValue('Failed to login. Please try again.');
    }
  }
);

export const userLogOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      console.log(axios.defaults.headers.common.Authorization);
      await axios.post('api/auth/logout');
      clearAuthToken();
    } catch {
      return rejectWithValue('Failed to log out. Please try again.');
    }
  }
);
