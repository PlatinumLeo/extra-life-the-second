import axios from 'axios';
import express from 'express';

const TEAM_IDS = [
  57288, // Slalom Atlanta
];

const FETCH_INTERVAL = 5 * 1000; // 5 Seconds will set to something higher for prod...

/* Begin Interval*/
const donors = [];
const donations = [];

setInterval(() => {
  axios.get(`https://www.extra-life.org/api/teams/${teamId}/donations`)
    .then(response => {
      let newDonations = response.data;

      if (donations.length == 0) {
        donations.push.apply(donations, newDonations); // Just copy the new array, don't worry about 
      } else {
        newDonations.forEach((n) => {
          if (!donations.find(d => d.donationId === n.donationId)) {
            console.log(`We got a new donation!`);
            donations.push(n);
            // Broadcast logic here
          }
        });
      }
    }).catch(err => { console.error(err); });
}, FETCH_INTERVAL);
/* End Interval */

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
