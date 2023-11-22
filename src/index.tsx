import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Box sx={{ padding: '1rem' }}>
      <App />
    </Box>
  </React.StrictMode>
);
