import React, { useContext, useEffect, useState } from 'react'
import {Helmet} from 'gatsby-plugin-react-i18next'

const themeLocalKey = '__THEME_MODE__'

/** @type {string} */
export const LightMode = 'light'
/** @type {string} */
export const DarkMode = 'dark'

const ThemeModeContext = React.createContext({
  theme: LightMode,
  setThemeMode: () => {},
  toggleThemeMode: () => {}
})

export const ThemeModePrvider = ({children}) => {
  const [themeMode, _setThemeMode] = useState(null)

  const setThemeMode = (mode) => {
    window.localStorage.setItem(themeLocalKey, mode)
    _setThemeMode(mode)
  }

  const toggleThemeMode = () => {
    setThemeMode(themeMode === LightMode ? DarkMode : LightMode)
  }

  let cacheMode = LightMode
  if (typeof window !== `undefined`) {
    cacheMode = window.localStorage.getItem(themeLocalKey) || cacheMode
  }
  
  const mode = themeMode || cacheMode
  const value = { themeMode: mode, toggleThemeMode, setThemeMode }
  
  useEffect(() => {
    // Init to set theme mode
    if (!themeMode) {
      setThemeMode(mode)
    }
  }, [])
  return (
    <ThemeModeContext.Provider value={value}>
      <>
        <Helmet>
          <body className={`theme-${mode}`} />
        </Helmet>
        {children}
      </>
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)