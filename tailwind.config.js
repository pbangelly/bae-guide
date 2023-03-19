const colors = require('tailwindcss/colors')
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
  ],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  objectPosition: {
    center: 'center'
  },
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.00rem',
        '6xl': '5rem',
        '7xl': '7rem',
      },
      colors: {
        black: colors.black,
        red: colors.red,
        transparent: 'transparent',
        current: 'currentColor',
        pink: {
          light: 'rgb(224,189,184)',
          dark: 'rgb(232,140,158)'
        },
        maxWidth: {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
        },
      }
    }
  }
};