const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');
const path = require('path');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'frozen',
      filename: 'remoteEntry.js',
      exposes: {
        './FrozenApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
