import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    remove: (state) => {
      state.todos.filter(i => i === state.payload);
    }
  }
});

export const actions = todoSlice.actions;

export default todoSlice.reducer;