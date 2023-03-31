import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',

  initialState: {
    items: [],
  },

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteTodo(state, action) {
      const index = state.items.findIndex(todo => todo.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});
export const { addTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
