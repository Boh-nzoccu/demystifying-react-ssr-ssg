import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the entry point for the client side
export const hydrate = ReactDOM.hydrateRoot(
  window.document.getElementById('root')!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
