import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Explore from '@pages/Explore';
import SignIn from '@pages/Signin';
import Product from '@pages/Product';
import Consult from '@pages/Consult';
import Profile from '@pages/Profile';
import Progress from '@pages/Progress';
import Landing from '@pages/Landing';
import { NavigationWrapper } from '@components/Navigation'
import { authUser } from '@js/auth';

function App() {
  useEffect(() => { authUser() }, [])
  
  return (
    <>
      <Switch>
        <Route path="/signin" exact component={()=><NavigationWrapper component={SignIn}/>}/>
        <Route path="/explore" exact component={()=><NavigationWrapper component={Explore}/>}/>
        <Route path="/products" exact component={()=><NavigationWrapper component={Product}/>}/>
        <Route path="/progress" exact component={()=><NavigationWrapper component={Progress}/>}/>
        <Route path="/consult" exact component={()=><NavigationWrapper component={Consult}/>}/>
        <Route path="/profile" exact component={()=><NavigationWrapper component={Profile}/>}/>
        <Route path="/" exact component={Landing}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
