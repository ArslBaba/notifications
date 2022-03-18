module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

   
    screens: {

        'xs': '300px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    
    },
    extend: {

      fontFamily: {

        'Inter' : ['Inter', 'sans-serif'],
      },

      colors:
      {
        slate_600 : " #475569",
        slate_800 : "#1E293B",
        slate_50 : '#F8FAFC;',
        back : "#E5E5E5",
      },

    },
  },
  plugins: [],
}