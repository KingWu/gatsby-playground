import React from 'react'
import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'
import { useThemeMode, LightMode } from 'components/presenter/theme/themeMode'

const DefaultLayout = ({ children }) => {
  const {themeMode, toggleThemeMode} = useThemeMode()
  const isLampOn = themeMode === LightMode
  return (
    <>
      <Header isLampOn={isLampOn} onLampClick={() => { toggleThemeMode() }} />
      <main className="main">
        {children}
      </main>
      <Footer />    
    </>
  )
}

export default DefaultLayout