const path = require('path');

const {confModule, entry, output, plugins} = require('./webpack.config.base.js')

module.exports = {
  mode : 'development',
  entry,
  output,
  module: confModule,
  plugins,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    port: 3000,
  }
}
