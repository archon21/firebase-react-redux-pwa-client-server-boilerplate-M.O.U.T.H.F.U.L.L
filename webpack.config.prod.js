var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: { bundled: './client/index.js', style: './public/style.scss' },
  target: 'web',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'js'),
    chunkFilename: '[id].[chunkhash].js',
    library: '[name]',
    libraryTarget: 'var'
  },

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
              includePaths: [path.resolve('./node_modules'), './src/scss']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps

      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new BundleAnalyzerPlugin(),
    new WebpackMd5Hash(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.scss$|\.html$|$\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin(['./static'])
  ]
};
