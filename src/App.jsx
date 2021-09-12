import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  async function authUser() {
  }

  useEffect(() => { authUser() }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
