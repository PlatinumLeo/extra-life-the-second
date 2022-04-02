import express from 'express';

const manage = express.Router();

manage.get('/liveness', (req, res) => {
  res.status(200).send('OK');
});

manage.get('/readiness', (req, res) => {
  res.status(200).send('OK');
});

export default manage;
