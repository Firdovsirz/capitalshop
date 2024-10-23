import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import './language/i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
