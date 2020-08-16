const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'Extra Life Slalom Atlanta',
        template: './site/index.html',
        excludeChunks: ['server']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
];

const config = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './site/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    devtool: '#source-map',
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ico|svg|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', 'jsx']
    }
};

module.exports = config;
