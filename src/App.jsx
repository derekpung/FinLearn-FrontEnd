import React from 'react';
import '@styles/App.css';
import '@styles/Fonts.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '@components/ProtectedRoute';
import Explore from '@pages/Explore';
import Product from '@pages/Product';
import Consult from '@pages/Consult';
import Profile from '@pages/Profile';
import Progress from '@pages/Progress';
import Landing from '@pages/Landing';
import Course from '@pages/Course';
import Oops from '@pages/Oops';
import Signin from '@pages/Signin';
import { NavigationWrapper } from '@components/Navigation'


function App() {
  return (
    <>
      <Switch>
        <Route path="/explore/course" exact component={()=><NavigationWrapper component={Course}/>}/>
        <Route path="/explore" exact component={()=><NavigationWrapper component={Explore}/>}/>
        <Route path="/products" exact component={()=><NavigationWrapper component={Product}/>}/>
        <ProtectedRoute path="/progress" exact ProtectedComp={()=><NavigationWrapper component={Progress}/>}/>
        <ProtectedRoute path="/consult" exact ProtectedComp={()=><NavigationWrapper component={Consult}/>}/>
        <ProtectedRoute path="/profile" exact ProtectedComp={()=><NavigationWrapper component={Profile}/>}/>
        <Route path="/signin" exact component={()=><NavigationWrapper component={Signin} />}/>
        <Route path="/" exact component={()=><NavigationWrapper component={Landing}/>}/>
        <Route path="/404" exact component={()=><NavigationWrapper component={Oops}/>}/>
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
