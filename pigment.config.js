// pigment.config.js
const { extendTheme } = require('@pigment-css/unplugin');

module.exports = {
  theme: extendTheme({
    // Определяем две схемы: light (по умолчанию) и dark
    colorSchemes: {
      light: {
        palette: {
          primary: '#3498db',
          background: '#f7f7f7',
          foreground: '#333333',
        },
      },
      dark: {
        palette: {
          primary: '#1e88e5',
          background: '#121212',
          foreground: '#e0e0e0',
        },
      },
    },
    // Функция, которая выдаёт селектор для каждой схемы
    getSelector: (colorScheme) => (colorScheme ? `[data-theme="${colorScheme}"]` : ':root'),
  }),
};
