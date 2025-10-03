// postcss.config.cjs (¡Sintaxis CommonJS con el plugin forzado!)
module.exports = {
  plugins: {
    // ¡CLAVE! Usar el plugin oficial que el error pide
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};