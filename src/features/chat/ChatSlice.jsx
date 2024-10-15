import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  user: { id: '1', name: 'User' },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload.text,
        timestamp: new Date().toLocaleTimeString(),
        user: state.user,
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload.text,
        timestamp: new Date().toLocaleTimeString(),
        user: action.payload.user,
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
