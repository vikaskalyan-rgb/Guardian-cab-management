import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import AdminContext from './LOGIN PAGE/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContext>
        <App />
      </AdminContext>    
    </BrowserRouter>
  </React.StrictMode>
);

