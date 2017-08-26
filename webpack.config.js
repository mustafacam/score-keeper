const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});




module.exports = {
    context: path.resolve(__dirname, ''),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /.sass?$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },


    plugins: [HtmlWebpackPluginConfig]
};

