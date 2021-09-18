import React, { useReducer, useContext, createContext } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { Auth0Provider } from '@auth0/auth0-react'

const AppContext = createContext()
const userAuthInit = { credentials: null }
const themesInit = {
  selected: "default",
  default: {
    color1: "rgb(255, 189, 129)",
    color2: "rgb(255, 154, 163)",
    color3: "rgb(217, 130, 200)",
    color4: "rgb(153, 122, 223)",
    color5: "rgb(62, 141, 229)",
    color6: "rgb(85, 61, 200)",
    neutralShade0: "rgba(60, 60, 60)",
    neutralShade1: "rgba(100, 100, 100)",
    neutralShade2: "rgba(140, 140, 140)",
    neutralShade3: "rgba(180, 180, 180)",
    neutralShade4: "rgba(220, 220, 220)",
    neutralShade5: "rgba(240, 240, 240)"
  }
}
const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { credentials: action.credentials }
    case 'signout':
      return { credentials: null }
    default:
      throw new Error('invalid auth action')
  }
}
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return { ...state, selected: action.selected }
    case 'add':
      return { ...state, [action.themeName]:action.theme }
    default:
      throw new Error('invalid theme action')
  }
}

export function AppProvider({ children }) {
  const [ userAuth, authDispatch ] = useReducer(authReducer, userAuthInit)
  const [ pageTheme, themeDispatch ] = useReducer(themeReducer, themesInit)

  const contextValues = {
    userAuth,
    authDispatch,
    pageTheme,
    themeDispatch
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