import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { getUserById, addUser } from '@js/user'
const createUserAcc = async (user) => {
  if (user && user.sub) {
    await getUserById(user.sub).then((response)=>{
      if(response.data.length === 0)
      {
        console.log("user does not exist");
        return addUser(user)
      }
      else
      {
        console.log("user exists");
      }
    })
  }
}

function ProtectedRoute({ ProtectedComp, ...restOfProps }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      createUserAcc(user)
    }
  },[ isLoading, user, isAuthenticated ])
  
  return (
    <Route {...restOfProps}
      render={ props => isAuthenticated 
      ? <ProtectedComp />
      : <Redirect to="/signin" />
    }/>)
}

export default ProtectedRoute