'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
let additionalPaths = [];
module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    dgram: 'empty',
    child_process: 'empty',
	module: 'empty'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    alias: {
      components: `${ defaultSettings.srcPath }/components/`,
      sources: `${ defaultSettings.srcPath }/sources/`,
      store: `${ defaultSettings.srcPath }/store/`,
      styles: `${ defaultSettings.srcPath }/styles/`,
      config: `${ defaultSettings.srcPath }/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {},
  postcss: function () {
    return [];
  }
};
