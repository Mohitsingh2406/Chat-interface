import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './features/chat/ChatSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
