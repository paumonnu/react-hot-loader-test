const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: './src/www',
        port: 8080,
        // publicPath: '/',
        progress: true,
        public: 'localhost',
    },
    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
                }
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = config;