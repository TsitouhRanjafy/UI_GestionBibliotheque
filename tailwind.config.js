/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'redpropre':'#FF0000',
      'bluepropre':'#00FF00',
      'whitepropre':'#FFFFFF',
      'bluehover':'#c4d5ff',
      'blueactive':'#a6c0ff',
      'blackprimary':'#9b9b9b',
      'primary':'#242424',
      'secondary':'#848484',
      'thirty':'#747474',
      'bgprimary':'#e1e1e1',
      'blue':'#477BFF'
    },
    extend: {
      width: {
        'book':'90px',
        '20%':'20%',
        'screen':'100vw',
        '90%':'90%'
      },
      minWidth: {
        '20%':'16%'
      },
      height: {
        'book':'150px',
        '90%':'90%',
        'screen':'100vh'
      },
      maxHeight: {
        'screen':'100vh'
      }
    },
  },
  plugins: [],
}

