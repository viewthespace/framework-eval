var path = require('path')
var webpack = require('webpack')
var combineLoaders = require('webpack-combine-loaders')

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
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src', 'javascripts'),
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(path.join(__dirname, 'src', 'javascripts', 'components')),
      '@styles': path.resolve(path.join(__dirname, 'src', 'javascripts', 'styles'))
    },
    extensions: ['.jsx', '.js', '.json']
  },
}
