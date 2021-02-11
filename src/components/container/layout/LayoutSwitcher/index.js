import React from 'react'
import DefaultLayout from 'components/presenter/layout/DefaultLayout'
import HomeLayout from 'components/presenter/layout/HomeLayout'

const maping = {
  'home': HomeLayout,
}

export const LayoutSwitcher = ({ children, pageContext }) => {
  const Layout = maping[pageContext.layout] || DefaultLayout
  return <Layout>{children}</Layout>
}

export default LayoutSwitcher