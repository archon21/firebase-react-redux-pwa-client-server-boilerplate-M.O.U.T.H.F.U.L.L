const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  entry: { bundled: './client/index.js', style: './public/style.scss' },
  target: 'web',
  mode: isDev ? 'development' : 'production',

  output: {
    filename: '[name].js',

    path: path.join(__dirname, 'public', 'js'),
    chunkFilename: '[id].[chunkhash].js'
  },
  devtool: 'source-maps',
  // optimization: {
  //   minimizer: [new OptimizeCSSAssetsPlugin()]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./node_modules', './public/scss')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //   // new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({ filename: 'css/style.css' })
  ]
});
