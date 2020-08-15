import express from 'express';
import path from 'path';

import api from './api';

const PORT = process.env.PORT || 8080;
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();

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
