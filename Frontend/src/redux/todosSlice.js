import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } = todosSlice.actions;

export default todosSlice.reducer;
