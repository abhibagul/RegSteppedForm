import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import WrapContexts from './Contexts/wrappedContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrapContexts>
      <App />
    </WrapContexts>
  </React.StrictMode>
);

