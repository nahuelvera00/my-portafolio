module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'welcome-background': 'url(/src/public/background.png)'
      },
      colors: {
        'fondo': '#E5EAF5',
        'nav': '#587FFC',
        'text': '#92A5FD',
        'button': '#FF8692',
        'contrast': '#1E1E5D'
      },
    },
  },
  plugins: [],
}
