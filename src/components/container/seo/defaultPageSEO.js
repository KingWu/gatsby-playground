import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../../presenter/seo/seo'

const DefaultPageSEO = ({context}) => {
  const {i18n, language} = context
  const langPack = i18n.resources[language].translator
  return (
    <SEO 
      title={langPack.seo.title}
      appName={langPack.seo.appName}
      author={langPack.seo.author}
      lang={language}
      description={langPack.seo.description} 
    />
  )
}

DefaultPageSEO.propTypes = {
  context: PropTypes.object.isRequired,
}

export default DefaultPageSEO