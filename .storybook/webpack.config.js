const path = require('path')
const utils = require('../build/utils')
const vueLoaderConfig = require('../build/vue-loader.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          fix: true,
          formatter: require('eslint-friendly-formatter')
        }
      }  
    ]
  },
  plugins: [
    new FriendlyErrorsPlugin()
  ]
}