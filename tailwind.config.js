module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        '3xl': '1920px',
        '4xl': '3840px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
