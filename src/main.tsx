import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/bootstrap.min.css';
import './styles/theme-main.css';
import './styles/theme-responsive.css';
import './styles/custom.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

