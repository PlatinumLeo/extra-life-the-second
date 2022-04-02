const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return ({
    mode: argv.mode,
    entry: {
      server: (argv.mode === 'production') ? './server/index.js' : [ './server/index.js' ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: nodeExternals(),
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: 'ignore-loader'
      }, {
        test: /\.(ico|svg|jpg|jpeg|png|webm|mp4|avif|webp)$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'ignore-loader'
      }, {
        test: /\.md$/,
        use: 'ignore-loader'
      }]
    }
  });
};
