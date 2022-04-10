import express from 'express';
import path from 'path';

import api from './api';
import { applyWebpackHotDevMiddleware } from './development/hotReload';

const NODE_ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line no-undef
const DIST_DIR = __dirname; // eslint-disable-line no-undef
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();

if (NODE_ENV === 'development') {
  applyWebpackHotDevMiddleware(app);
}

app.use(express.static(DIST_DIR));
app.use(express.json());
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

export default app;
