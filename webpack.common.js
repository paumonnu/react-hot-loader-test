const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'bundle/'),
        filename: 'bundle.js',
        // publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                // exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|scss)/,
                exclude: path.join(__dirname, 'node_modules\/material-ui'),
                loader: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.yml/,
                loader: ['json-loader', 'yaml-loader'],
            },
            {
                test: /\.(jpg|png|gif|eot|woff|woff2|svg|ttf|otf|ico)/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'babel-core': path.resolve(
                path.join(__dirname, './node_modules/@babel/core'),
            ),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            template: 'www/index.html',
        }),
        new webpack.NamedModulesPlugin()
    ],
    performance: {
    }
};