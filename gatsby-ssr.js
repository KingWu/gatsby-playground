import React from 'react'
import DefaultPageSEO from 'components/container/seo/defaultPageSEO'
import { ThemeModePrvider } from 'components/presenter/theme/themeMode'

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  const { pageContext } = props
  return (
    <>
      <DefaultPageSEO context={pageContext} />
      {element}
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeModePrvider>
      {element}
    </ThemeModePrvider>
  )
}