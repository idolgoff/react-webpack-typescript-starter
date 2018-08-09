// production config
const merge = require('webpack-merge');
const {aliases} = require("./aliases");
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./common');

const ROOT_PATH = "../../";
const DIST_PATH = ROOT_PATH + "dist";

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: './index.tsx',
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: resolve(__dirname, DIST_PATH),
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: resolve(__dirname, ROOT_PATH),
            verbose: true,
            dry: false
        }),
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
