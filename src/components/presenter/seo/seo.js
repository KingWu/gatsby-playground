/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'gatsby-plugin-react-i18next'

const SEO = ({description, meta, title, appName, author, lang}) => {
  const tempMeta = [{
    name: `description`,
    content: description
  },
  {
    property: `og:title`,
    content: title
  },
  {
    property: `og:description`,
    content: description
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:title`,
    content: title
  },
  {
    name: `twitter:description`,
    content: description
  }]
  if (author) {
    tempMeta.push({
      name: `twitter:creator`,
      content: author
    })
  }
  const titleTemplate = appName ? `%s | ${appName}` : ''
  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      meta={tempMeta.concat(meta)}
    >
      {
        lang ? <html lang={lang} /> : null
      }      
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  lang: null,
  appName: null,
  author: null,
}

SEO.propTypes = {
  appName: PropTypes.string,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default SEO