import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import createConfig from '../../webpack.site.config';

const NODE_ENV = process.env.NODE_ENV || 'development';

export function applyWebpackHotDevMiddleware(app) {
  const webpackConfig = createConfig(NODE_ENV, 'development');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, { }));

  if (module.hot) {
    module.hot.accept();
  }
};
