/**
 * Tailwind CSS configuration file
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        customColor: '#1DA1F2', // Example of a custom color
      },
      animation: {
        bounceSlow: 'bounce 3s infinite', // Custom animation
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  plugins: [],
};
