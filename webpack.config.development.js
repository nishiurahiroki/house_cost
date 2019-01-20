const {confModule, entry, output, plugins} = require('./webpack.config.base.js')

module.exports = {
  mode : 'development',
  entry,
  output,
  module: confModule,
  plugins
}
