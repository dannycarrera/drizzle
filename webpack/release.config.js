const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  externals: {
    'eth-block-tracker': 'eth-block-tracker-es5',
    'redux': 'redux',
    'redux-saga': 'redux-saga',
    'web3': 'web3',
    'is-plain-object': 'is-plain-object',
    'deepmerge': 'deepmerge'
  }
});