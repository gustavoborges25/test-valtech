const path = require('path');

module.exports = {
  // lintOnSave: 'error',
  configureWebpack: {
    resolve: {
      alias: {
        App: path.resolve(__dirname, 'src/app/'),
        Support: path.resolve(__dirname, 'src/support/'),
        Domain: path.resolve(__dirname, 'src/domain/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Locales: path.resolve(__dirname, 'src/locales/'),
        Plugins: path.resolve(__dirname, 'src/plugins/'),
      },
    },
  },
};
