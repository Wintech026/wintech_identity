
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/wintech.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import logo from './assets/logo.png';

// Configuration du logo dans l'onglet du navigateur
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = logo;
document.head.appendChild(favicon);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
