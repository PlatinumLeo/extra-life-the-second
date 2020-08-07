import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.dev.config';

const PORT = process.env.PORT || 8090; // eslint-disable-line no-undef
const DIST_DIR = __dirname; // eslint-disable-line no-undef
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(DIST_DIR));
app.use(express.json());

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) return next(err);
        res.set('content-type', 'text/html');
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); // eslint-disable-line no-undef
    console.log('Press Ctrl+C to quit.'); // eslint-disable-line no-undef
});
