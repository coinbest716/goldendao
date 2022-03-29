module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffffee',
      darkest_gold: '#895f1f',
      dark_gold: '#b08000',
      medium_gold: '#c6a000',
      lightest_gold: '#f6d42e',
      lightest_gray: '#efefef',
      medium_gray: '#999999',
      dao_green: '#12ff00',
      dao_dlg_color: '#222222',
      black: '#000',
      blue: '#2563eb',
      dark_black: '#181715',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
