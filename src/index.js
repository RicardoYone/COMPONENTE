import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Pagos from './components/Pagos';
import Error from "./components/Error"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Error/>
  </React.StrictMode>
);


