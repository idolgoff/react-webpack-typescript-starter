// production config
const merge = require('webpack-merge');
const {aliases} = require("./aliases");

const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
      templateParameters: {
          NODE_ENV: 'production'
      }
    }),
  ],
  resolve: {
    alias: aliases(resolve)
  }
});
