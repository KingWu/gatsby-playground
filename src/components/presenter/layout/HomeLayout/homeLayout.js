import React from 'react'
import Header from 'components/presenter/navigation/Header'
import Footer from 'components/presenter/navigation/Footer'

const HomeLayout = ({ children }) => (
  <>
    <Header />
    <main className="main">
      {children}
    </main>
    <Footer />    
  </>
)

export default HomeLayout