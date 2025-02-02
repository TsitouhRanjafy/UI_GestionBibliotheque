/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'redpropre':'#FF0000',
      'bluepropre':'#00FF00',
      'whitepropre':'#FFFFFF',
      'bluehover':'#34495e',
      'blueactive':'#1a252f',
      'blackprimary':'#2c3e50',
      'primary':'#242424',
      'secondary':'#848484',
      'thirty':'#747474',
      'bgprimary':'#e1e1e1',
      'blue':'#477BFF',
      'whiteprimary': '#f5f5f5'
    },
    extend: {
      width: {
        'book':'110px',
        '20%':'20%',
        'screen':'100vw',
        '90%':'90%'
      },
      minWidth: {
        '20%':'16%'
      },
      height: {
        'book':'170px',
        '90%':'90%',
        'screen':'100vh'
      },
      maxHeight: {
        'screen':'100vh'
      },
      flex: {
        '2.7':'2.7',
        '2.3':'2.3'
      }
    },
  },
  plugins: [],
}

