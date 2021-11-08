const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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

module.exports = (env, argv) => {
  return ({
    mode: argv.mode,
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
    plugins: devPlugins,
    resolve: {
      extensions: ['*', '.js', 'jsx']
    }
  });
}
