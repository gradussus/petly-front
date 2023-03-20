import { createSlice } from '@reduxjs/toolkit';
import operations from './noticesOperations';

const { fetchNoticesByCategory } = operations;

const noticesInitialState = {
  notices: { result: [] },
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.notices = { result: [] };
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.pending, state => {
        handlePending(state);
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload;
        state.error = null;
      })
      .addCase(fetchNoticesByCategory.rejected, (state, action) => {
        handleReject(state, action);
      });
  }
});

export const noticesReducer = noticesSlice.reducer;
