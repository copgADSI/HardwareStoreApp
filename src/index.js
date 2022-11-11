import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ApplicationProvider from './context/ApplicationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApplicationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApplicationProvider>
);
