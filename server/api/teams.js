import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/:teamId/donors', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}/donors`)
    .then(response => {
      let teamDonors = response.data;
      res.send(teamDonors);
    }).catch(err => res.status(500).send(err));
});

router.get('/:teamId/donations', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}/donations`)
    .then(response => {
      let teamDonations = response.data;
      res.send(teamDonations);
    }).catch(err => res.status(500).send(err));
});

router.get('/:teamId', (req, res) => {
  let { teamId } = req.params;

  axios.get(`https://www.extra-life.org/api/teams/${teamId}`)
    .then(response => {
      let team = response.data;
      res.send(team);
    }).catch(err => res.status(500).send(err));
});

export default router;
