const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports.confModule = {
  rules: [
    {
      loader : 'babel-loader',
      exclude : /node_modules/,
      test : /\.js[x]?$/
    }
  ]
}

module.exports.entry = './src/index.js'

module.exports.output = {
  path : path.resolve(__dirname, 'dist'),
  filename : 'bundle.js?[hash]'
}

module.exports.plugins = [
  new HtmlWebpackPlugin({
    template : './template/index.html'
  })
]
