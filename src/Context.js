import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [ userAuth, setUserAuth ] = useState(null)
  const colors = {
    color1: "#001529",
    color2: "#F5DA05",
    neutralShade0: "rgba(60, 60, 60)",
    neutralShade1: "rgba(100, 100, 100)",
    neutralShade2: "rgba(140, 140, 140)",
    neutralShade3: "rgba(180, 180, 180)",
    neutralShade4: "rgba(220, 220, 220)",
    neutralShade5: "rgba(240, 240, 240)"
  }

  const contextValues = {
    userAuth,
    setUserAuth,
    ...colors
  }
  
  return(
    <AppContext.Provider
      value={contextValues}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)