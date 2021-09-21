import React, { useEffect } from 'react';
import '@styles/App.css';
import '@styles/Fonts.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Explore from '@pages/Explore';
import Product from '@pages/Product';
import Consult from '@pages/Consult';
import Profile from '@pages/Profile';
import Progress from '@pages/Progress';
import Landing from '@pages/Landing';
import Course from '@pages/Course';
import Oops from '@pages/Oops';
import { NavigationWrapper } from '@components/Navigation'


function App() {
  return (
    <>
      <Switch>
        <Route path="/explore/course" exact component={()=><NavigationWrapper component={Course}/>}/>
        <Route path="/explore" exact component={()=><NavigationWrapper component={Explore}/>}/>
        <Route path="/products" exact component={()=><NavigationWrapper component={Product}/>}/>
        <Route path="/progress" exact component={()=><NavigationWrapper component={Progress}/>}/>
        <Route path="/consult" exact component={()=><NavigationWrapper component={Consult}/>}/>
        <Route path="/profile" exact component={()=><NavigationWrapper component={Profile}/>}/>
        <Route path="/" exact component={()=><NavigationWrapper component={Landing}/>}/>
        <Route path="/404" exact component={()=><NavigationWrapper component={Oops}/>}/>
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
