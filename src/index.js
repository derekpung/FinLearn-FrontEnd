import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@src/Context'
// import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <StyledEngineProvider> */}
      <AppProvider>
        <App />
      </AppProvider>
      {/* </StyledEngineProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
