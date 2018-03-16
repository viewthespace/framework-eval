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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(path.join(__dirname, 'src', 'javascripts', 'components')),
      '@reducers': path.resolve(path.join(__dirname, 'src', 'javascripts', 'reducers')),
      '@actions': path.resolve(path.join(__dirname, 'src', 'javascripts', 'actions')),
      'vue': 'vue/dist/vue.js'
    },
    extensions: ['.js', '.json', '.vue'],
  },
}
