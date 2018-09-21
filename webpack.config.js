const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './client/index.js',
  mode: isDev ? 'development' : 'production',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
