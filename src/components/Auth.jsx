import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

export const SigninButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button 
      variant="contained"
      onClick={() => loginWithRedirect({ redirectUri:`${process.env.REACT_APP_BASE_URL}/profile` })}
      aria-label="login">Sign In</Button>
  )
}