import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

// Definição explícita do basename para evitar problemas
const basename = window.location.host.includes('github.io') 
  ? '/deus-ex-machina' 
  : '/';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);