import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Context from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
);