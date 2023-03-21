import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com/';

const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchByGategory',
  async ({ category }, { rejectWithValue }) => {
    /*   try {
      const response = await axios.get(
        `/notices/${category}`
      );
      return response.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
*/
    if (category === 'sell') {
      return { result: [{ _id: 1, name: 'Dog for Sale' }] };
    } else if (category === 'lostfound') {
      return { result: [{ _id: 1, name: 'Dog for found' }] };
    } else if (category === 'forfree') {
      return { result: [{ _id: 1, name: 'Dog for free' }] };
    }
  }
);

const noticesOperations = { fetchNoticesByCategory };

export default noticesOperations;
