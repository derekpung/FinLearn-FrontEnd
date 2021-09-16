import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@src/Context'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Auth0Provider
          domain={process.env.REACT_APP_ISSUER_BASE_URL}
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={process.env.REACT_APP_BASE_URL+'/explore'}
        >
        <App />
        </Auth0Provider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
