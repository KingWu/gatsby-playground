const path = require('path')
const { languages, defaultLanguage } = require('./languages')

const isEnableBuildAnalyzer = process.env.GATSBY_ANALYZE || false
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
console.log(`isDisableBuildAnalyzer : ${isEnableBuildAnalyzer}`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const isDevMode = activeEnv === "development"

console.log(`process.env.GATSBY_ENVIRONMENT : ${process.env.GATSBY_ENVIRONMENT}`)
console.log(`process.env.ENVIRONMENT : ${process.env.ENVIRONMENT}`)

module.exports = {
  siteMetadata: {
    title: "wenjetso-portal",
  },
  plugins: [
    // Support to import root path
    `gatsby-plugin-root-import`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        libs: path.join(__dirname, 'src/libs'),
        stores: path.join(__dirname, 'src/stores'),
      }
    },
    // Postcss pre-processor
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    // Support to import svg to react component
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    // Component to manage <head>, <body>, <meta>
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/container/layout/LayoutSwitcher`),
      },
    },
    // SSR for material ui to insert style used by material ui
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
          disableAutoprefixing: isDevMode,
          disableMinification: isDevMode,
        },
      },
    },
    // i18n generator to create different language pages
    {
      // including a plugin from outside the plugins folder needs the path to it
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        path: `${__dirname}/src/assets/locales`,
        siteUrl: 'http://google.com',
        i18nextOptions: {
          debug: true,
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: '.',
          ns: ["translator"],
          defaultNS: "translator",
        },
        pages: [
          {
            matchPath: '/ignored-page',
            languages: ['en']
          }
        ]
      }
    },
    // Bundle size analyzer
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        disable: !isEnableBuildAnalyzer,
        analyzerMode: 'static'
      },
    },
  ],
}