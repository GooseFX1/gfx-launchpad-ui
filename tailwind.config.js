module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,less}", "./index.html"],
    theme: {
      extend: {
        screens: {  
          //WIDTH_UP_TO - @media(max-width: ${max}px)
          'sm': {'max': '500px'},
          'md': {'max': '720px'},
          'lg': {'max': '960px'},
          'xl': {'max': '1280px'},
  
          //WIDTH_FROM - @media(min-width: ${min-}px)
          'min-sm': '501px',
          'min-md': '721px',
          'min-lg': '961px',
          'min-xl': '1281px'
        },
        colors: {
          'black-1': '#191919',
          'green-1': '#50bb35',
          'gray-1': '#9A9A9A',
          'gray-2': '#636363',
        },
        padding: {
          '0.75': '3px',
          '10p': '10%'
        },
        margin: {
          '3.75': '15px',
          '4.5': '18px'
        },
        fontFamily: {
          'display': ['Monserrat']
        },
        borderRadius: {
          'small': '10px',
          'average': '15px',
          'bigger': '20px',
          'half': '25px',
          'circle': '50px'
        },
        height: {
          '5.5': '22px',
          '11.75': '47px',
          '12.5': '50px',
          '16.25': '65px',
          '17.5': '70px',
          '24.25': '100px',
          'inherit': 'inherit'
        },
        width: {
          '12.5': '50px',
          '21': '84px',
          '81.5': '326px',
          '628': '628px',
          '30p': '30%',
          '85p': '85%',
          'inherit': 'inherit'
        },
        minWidth: {
          '330': '330px',
          'vw': '100vw'
        },
        maxWidth: {
          '330': '330px',
          'vw': '100vw'
        },
        minHeight: {
          '330': '330px',
          '400': '400px',
          'vh': '100vh'
        },
        maxHeight: {
          '90p': '90%',
          '80p':  '80%',
          'vh': '100vh'
        },
        fontSize: {
          'smallest': '11px',
          'smaller': '13px',
          'tiny': '15px',
          'regular': '18px',
          'average': '22px',
          'big': '40px',
        }
      },
    },
    plugins: [],
  }
  