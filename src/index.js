import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fonts/Amatic_SC/AmaticSC-Bold.ttf';
import './fonts/Quicksand/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wjwxUD2GF9Zc.woff2';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

