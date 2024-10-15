import React from 'react';
import Chat from './components/Chat';
import { CssBaseline, Container } from '@mui/material';
import './styles.css'; // Include global styles

const App = () => {
  return (
    <Container className="chat-container" sx={{ maxWidth: '800px', paddingTop: '20px' }}>
      <CssBaseline />
      <Chat />
    </Container>
  );
};

export default App;


