/* eslint-env node */
const { resolve } = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const buildDir = 'docs';
const path = resolve(__dirname, buildDir);

module.exports = {
  //Start here
  entry: './src/index.js',
  //Put the build output here (not dev-server)
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  //Mode (will eventually be cmd line arg in package.json scripts)
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `./${buildDir}`,
    historyApiFallback: true,
    proxy: { '/api': 'http://localhost:3000' }
  },
  plugins: [
    //Add plugins
    new CleanPlugin(`${path}/bundle.*.js`),
    new HtmlPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        }
      },

      // css
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },

      // images
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};