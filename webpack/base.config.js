const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'drizzle.js',
    library: '@wundr/drizzle',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: '/node_modules',
        loader: 'babel-loader'
      }
    ]
  }
}
