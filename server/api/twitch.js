import axios from 'axios';
import express from 'express';

const TWITCH_API_URL = 'https://api.twitch.tv/kraken/';
const CLIENT_ID = 'mo2zyz8fwx0rpcdhve83nql5ymzmsa';

const TWITCH_CONFIG = {
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': CLIENT_ID
  }
};

const router = express.Router();

router.get('/streams', (req, res) => {
  const channel = req.query.channel; // 23679089
  
  axios.get(`${TWITCH_API_URL}streams?channel=${channel}`, TWITCH_CONFIG)
    .then(response => {
      res.send(response.data);
    }).catch(err => res.status(500).send(err));
});

router.get('/users', (req, res) => {
  const login = req.query.login;

  axios.get(`${TWITCH_API_URL}users?login=${login}`, TWITCH_CONFIG)
    .then(response => {
      res.send(response.data);
    }).catch(err => res.status(500).send(err));
});

export default router;
