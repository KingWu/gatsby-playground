// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin')

/* Custom Text Style */
const textStyle = {
  '.text-h1': {
    fontSize: '35px',
    fontWeight: '300',
  },
  '.text-h2': {
    fontSize: '29px',
    fontWeight: '300',
  },
  '.text-h3': {
    fontSize: '24px',
    fontWeight: '400',
  },
  '.text-h4': {
    fontSize: '20px',
    fontWeight: '400',
  },
  '.text-h5': {
    fontSize: '20px',
    fontWeight: '400',
  },
  '.text-h6': {
    fontSize: '18px',
    fontWeight: '500',
  },
  '.text-subt1': {
    fontSize: '17px',
    fontWeight: '400',
  },
  '.text-subt2': {
    fontSize: '14px',
    fontWeight: '500',
  },
  '.text-body1': {
    fontSize: '17px',
    fontWeight: '400',
  },
  '.text-body2': {
    fontSize: '14px',
    fontWeight: '400',
  },
  '.text-button': {
    fontSize: '14px',
    fontWeight: '500',
  },
  '.text-caption': {
    fontSize: '12px',
    fontWeight: '400',
  },
  '.text-overline': {
    fontSize: '10px',
    fontWeight: '400',
  },
}

module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--primary-color))',
      'primary-dark': 'rgb(var(--primary-dark-color))',
      secondary: 'rgb(var(--secondary-color))',
      'secondary-dark': 'rgb(var(--secondary-dark-color))',
      background: 'rgb(var(--background-color))',
      surface: 'rgb(var(--surface-color))',
      error: 'rgb(var(--error-color))',
      'on-primary': 'rgba(var(--on-primary-color), var(--text-opacity))',
      'on-secondary': 'rgba(var(--on-secondary-color), var(--text-opacity))',
      'on-background': 'rgba(var(--on-background-color), var(--text-opacity))',
      'on-surface': 'rgba(var(--on-surface-color), var(--text-opacity))',
      'on-error': 'rgba(var(--on-error-color), var(--text-opacity))',
      overlay: '#484848'
    },
    extend: {
      height: {
        header: '56px'
      },
      textOpacity: {
        'normal': '0.87',
        'medium': '0.6',
        'disabled': '0.38'
      },
      /** Breakpoints */
      screens: {
        desktop: { min: '960px' },
        tablet: { max: '959px' },
        phone: { max: '639px' },
        phoneAbove: { min: '640px' },
      },
    },
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line func-names
    plugin(function({ addUtilities }) {
      addUtilities(textStyle)
    })
  ],
}
