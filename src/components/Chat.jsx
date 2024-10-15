import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { sendMessage, receiveMessage } from '../features/chat/ChatSlice';
import '../styles.css';  // Import custom CSS

const Chat = () => {
  const dispatch = useDispatch();
  const { messages, user } = useSelector((state) => state.chat);
  const messageEndRef = useRef(null);
  const [input, setInput] = useState('');

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate receiving a message after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        receiveMessage({
          text: 'Hello! How can I help you today?',
          user: { id: '2', name: 'Support' },
        })
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendMessage({ text: input }));
      setInput('');
    }
  };

  return (
    <Paper elevation={3} className="chat-container" sx={{ width: '60%', margin: 'auto', padding: 2 }}>
      <Box className="chat-window">
        {messages.map((msg) => (
          <Box
            key={msg.id}
            className={msg.user.id === user.id ? 'sent-message message' : 'received-message message'}
          >
            <Typography>
              <strong>{msg.user.name}:</strong> {msg.text}
              <span className="message-time">{msg.timestamp}</span>
            </Typography>
          </Box>
        ))}
        <div ref={messageEndRef} />
      </Box>
      <Box className="message-input-container">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="send-button" variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;


