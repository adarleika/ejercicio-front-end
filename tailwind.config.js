// tailwind.config.js (Debe usar export default)
/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {

    fontFamily: {
      sans: ['Graphik', 'sans-serif'] 
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      // Aquí puedes agregar colores, fuentes y otros tokens del diseño de Figma
      // Ejemplo: colors: { 'custom-blue': '#123456' }

    },
  },
  plugins: [],
}