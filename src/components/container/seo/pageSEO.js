import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation  } from 'gatsby-plugin-react-i18next'
import SEO from '../../presenter/seo/seo'

const PageSEO = ({description, meta, title, author}) => {
  const { t } = useTranslation()
  return (
    <SEO 
      title={title}
      meta={meta}
      appName={t('seo.appName')}
      author={author}
      description={description} 
    />
  )
}

PageSEO.defaultProps = {
  meta: [],
  author: null,
}

PageSEO.propTypes = {
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default PageSEO