const {confModule, entry, output, plugins} = require('./webpack.config.base.js')

module.exports = {
  mode : 'production',
  entry,
  output,
  module: confModule,
  plugins
}
