/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    'fontFamily': {
      'family': 'var(--font-family)',
    },

    'fontWeight': {
      'heavy': '800',
      'bold': '500',
      'x-bold': '400',
      'light': '300',
    },

    'fontSize': {
      'xl': '62px',
      'lg': '48px',
      'bg': '36px',
      'md': '20px',
      'sm': '16px',
      'm': '14px',
      'xs': '12px',
    },

    'lineHeight': {
      'x-loose': '75px',
      'loose': '60px',
      'medium': '48px',
      'relaxed': '24px',
      'tight': '16px',
    },

    borderRadius: {
      'md': '5px',
    },

    border: {
      'solid': ' 2px solid var(--color-footer)',
      'style': ' 2px solid var(--color-style)',
    },

    screens: {
      'lg': { 'max': '1050px' },
      'cl': { 'max': '990px' },
      'bg': { 'max': '850px' },
      'md': { 'max': '700px' },
      'xm': { 'max': '650px' },
      'sm': { 'max': '550px' },
      'xs': { 'max': '490px' },
      'tn': { 'max': '350px' },
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },

      backgroundImage:{
        'gradient-custom': 'linear-gradient(103.22deg, var(--tw-gradient-stops))'
      },

      keyframes: {
        'scale-up-center': {
          '0%': {
            '-webkit-transform': 'scale(0.5)',
            transform: 'scale(0.5)'
          },
          '100 %': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)'
          }
        }
      },

      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },

      flex: {
        '1': '1',
        '0.6': '0.6',
        '2': '2',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('nth-child-2', '& > * > *:nth-child(2)');
      addVariant('lastp', '& p:lastchild');
    }
  ],
}

