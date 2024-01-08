module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontStyle: ['hover', 'focus'],
      width: {
        128: '32rem',
      },
      minWidth: {
        3: '350px',
      },
      screens: {
        '3xl': { max: '2500px' },

        '3xlm': { min: '2500px' },

        '2xl': { max: '1535px' },

        '2xlm': { min: '1535px' },

        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },

        xlm: { min: '1279px' },

        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },

        lgm: { min: '1023px' },

        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },

        mdm: { min: '767px' },

        sp: { max: '999px' },

        spm: { min: '1000px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },

        smm: { min: '639px' },

        mb: { max: '450px' },

        mbm: { min: '450px' },

        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
