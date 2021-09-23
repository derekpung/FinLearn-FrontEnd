import React, { useReducer, useContext, createContext, useState } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { Auth0Provider } from '@auth0/auth0-react'

const AppContext = createContext()

const alertInit = []
const alertReducer = (state, action) => {
  switch (action.type) {
    case 'alert':
      return [
        ...state,
        {
          status: true,
          alertType: action.payload.alertType,
          message: action.payload.message
        }
      ]
    default :
      return state.slice(1)
  }
}

export function AppProvider({ children }) {
  const [ pageAlerts, alertDispatch ] = useReducer(alertReducer, alertInit)
  const [ user, setUser ] = useState(null)
  const [ authLoading, setAuthLoading ] = useState(false)
  const notImplemented = event => { 
    alertDispatch({
      type: 'alert', 
      payload: {
        message: "Not Implemented (yet)", 
        alertType: 'error'
      }})
  }


  const contextValues = {
    pageAlerts,
    alertDispatch,
    notImplemented,
    user,
    setUser,
    authLoading,
    setAuthLoading
  }
  
  return(
    <AppContext.Provider
      value={contextValues}
    >
      <Auth0Provider
        domain={process.env.REACT_APP_ISSUER_BASE_URL}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={process.env.REACT_APP_BASE_URL+'/explore'}
      >
        <StyledEngineProvider injectFirst>
          {children}
        </StyledEngineProvider>
      </Auth0Provider>
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)