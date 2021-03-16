const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '840px',
          xl: '1080px',
        },
      },
    },
    colors: {
      primary: '#625788',
      transparent: 'transparent',
      current: 'currentColor',
      black: defaultTheme.colors.black,
      white: defaultTheme.colors.white,
      gray: defaultTheme.colors.gray,
      green: defaultTheme.colors.green,
      indigo: defaultTheme.colors.indigo,
      red: defaultTheme.colors.red,
      yellow: defaultTheme.colors.amber,
    },
  },
  variants: {},
  plugins: [],
}
