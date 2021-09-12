import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Explore from '@pages/Explore';
import SignIn from '@pages/Signin';
import Product from '@pages/Product';
import Consult from '@pages/Consult';
import Profile from '@pages/Profile';
import Landing from '@pages/Landing';
import { authUser } from '@js/auth';
import { AppProvider } from '@src/Context'

function App() {
  useEffect(() => { authUser() }, [])
  
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/products" exact component={Product}/>
          <Route path="/consult" exact component={Consult}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/" exact component={Landing}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
