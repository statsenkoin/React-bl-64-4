import { todosReducer } from './todoSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
