const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let devPlugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Extra Life Slalom Atlanta',
    template: './site/index.html',
    excludeChunks: ['server']
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

let prodPlugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Extra Life Slalom Atlanta',
    template: './site/index.html',
    excludeChunks: ['server']
  }),
  new MiniCssExtractPlugin({
    filename: 'style.[name].css',
    chunkFilename: '[id].css'
  })
];

module.exports = (env, argv) => {
  return ({
    mode: (argv.mode === 'production') ? 'production' : 'development',
    entry: {
      main: (argv.mode === 'production') ? './site/index.js' : ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './site/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'web',
    devtool: (argv.mode === 'production') ? 'hidden-source-map' : 'inline-source-map', // ^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$
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
        test: /\.(ico|svg|jpg|jpeg|png|webm|mp4|avif|webp)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }]
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    },
    plugins: (argv.mode === 'production') ? prodPlugins : devPlugins,
    resolve: {
      extensions: ['*', '.js', 'jsx']
    }
  });
}
