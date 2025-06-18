const { extendTheme } = require('@pigment-css/unplugin');

module.exports = {
  theme: extendTheme({
    palette: {
      primary: '#3498db',
      background: '#f7f7f7',
      surface: '#ffffff',
      foreground: '#333333',
    },
  }),
};
