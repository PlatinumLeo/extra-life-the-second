const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let devPlugins = [
  new HtmlWebpackPlugin({
    title: 'Extra Life Slalom Atlanta',
    template: './site/index.html',
    excludeChunks: ['server']
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

let prodPlugins = [
  new webpack.ids.HashedModuleIdsPlugin(),
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

let devOptimizations = {
  minimizer: [
    `...`,
    new CssMinimizerPlugin(),
  ]
};

let prodOptimizations = Object.assign({}, devOptimizations, {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm.${packageName.replace('@', '')}`;
        }
      }
    }
  }
});


module.exports = (env, argv) => {
  return ({
    mode: (argv.mode === 'production') ? 'production' : 'development',
    entry: {
      main: (argv.mode === 'production') ? './site/index.js' : ['webpack-hot-middleware/client?path=//localhost:3000/__webpack_hmr&timeout=20000&reload=true', './site/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: (argv.mode === 'production') ? '[name].[chunkhash].js' : '[name].js'
    },
    target: 'web',
    devtool: (argv.mode === 'production') ? 'hidden-source-map' : 'inline-source-map', // ^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(ico|jpg|jpeg|png|webm|mp4|avif|webp)$/,
        loader: 'file-loader'
      }, {
        test: /\.md$/,
        use: [
          {
            loader: 'asset/source'
          }
        ]
      }, {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }, {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
          loader: '@svgr/webpack'
        }]
      }]
    },
    optimization: (argv.mode === 'production') ? prodOptimizations : devOptimizations,
    plugins: (argv.mode === 'production') ? prodPlugins : devPlugins,
    resolve: {
      extensions: ['*', '.js', 'jsx']
    }
  });
}
