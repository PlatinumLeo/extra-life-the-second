import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import api from './api';
import createConfig from '../webpack.site.config';


const PORT = process.env.PORT || 8090; // eslint-disable-line no-undef
const NODE_ENV = process.env.NODE_ENV || 'local';
const webpackConfig = createConfig(NODE_ENV, 'development');
const DIST_DIR = __dirname; // eslint-disable-line no-undef
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(DIST_DIR));
app.use(express.json());
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`); // eslint-disable-line no-undef
  console.log('Press Ctrl+C to quit.'); // eslint-disable-line no-undef
});
