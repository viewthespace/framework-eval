var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    index: path.join(APP_DIR, 'javascripts', 'index.js'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src', 'javascripts'),
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(path.join(__dirname, 'src', 'javascripts', 'components')),
      '@reducers': path.resolve(path.join(__dirname, 'src', 'javascripts', 'reducers')),
      '@actions': path.resolve(path.join(__dirname, 'src', 'javascripts', 'actions')),
    },
  },
}
