import axios from 'axios';
import express from 'express';

const router = express.Router();
let lastPull = 0;
let refreshPeriod = process.env.REFRESH_PERIOD || 300000; // 5 minutes or 5 * 60 * 1000;
let teams = new Map();
let teamDonations = new Map();

router.get('/:teamId/donations', (req, res) => {
    let { teamId } = req.params;
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - lastPull;
    if (timeDiff >= refreshPeriod || !teamDonations.has(teamId)) {
        axios.get(`https://www.extra-life.org/api/teams/${teamId}/donations`)
            .then(response => {
                teamDonations[teamId] = response.data;
                lastPull = currentTime;
                res.send(teamDonations[teamId]);
            }).catch(err => res.status(500).send(err));
    } else {
        res.send(teamDonations[teamId]);
    }
});

router.get('/:teamId', (req, res) => {
    let { teamId } = req.params;
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - lastPull;
    if (timeDiff >= refreshPeriod || !teams.has(teamId)) {
        axios.get(`https://www.extra-life.org/api/teams/${teamId}`)
            .then(response => {
                teams[teamId] = response.data;
                lastPull = currentTime;
                res.send(teams[teamId]);
            }).catch(err => res.status(500).send(err));
    } else {
        res.send(teams[teamId]);
    }
});

export default router;
