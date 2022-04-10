export const applyWebpackDevHotMiddleware = (app) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const createConfig = require('../../webpack.site.config');
  const NODE_ENV = process.env.NODE_ENV || 'development';
  const webpackConfig = createConfig(NODE_ENV, 'development');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  if (module.hot) {
    module.hot.accept();
  }
};
