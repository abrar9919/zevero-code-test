module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
        container: "#E4E7EC",
        button: "#265A62",
        text:"#101828"
        }, 
      },
    fontSize:{
      h1: ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
    },
    boxShadow:{
    xs: 'rgba(16, 24, 40, 0.05)'
    }
  },  
  plugins: [],
}

