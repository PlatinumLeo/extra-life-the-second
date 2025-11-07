import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/:participantId/donors', (req, res) => {
    let { participantId } = req.params;

    axios.get(`https://www.extra-life.org/api/participants/${participantId}/donors`)
        .then(response => {
            let participantDonors = response.data;
            res.send(participantDonors);
        }).catch(err => res.status(500).send(err));
});

router.get('/:participantId/donations', (req, res) => {
    let { participantId } = req.params;

    axios.get(`https://www.extra-life.org/api/participants/${participantId}/donations`)
        .then(response => {
            let participantDonations = response.data;
            res.send(participantDonations);
        }).catch(err => res.status(500).send(err));
});

router.get('/:participantId', (req, res) => {
    let { participantId } = req.params;

    axios.get(`https://www.extra-life.org/api/participants/${participantId}`)
        .then(response => {
            let participant = response.data;
            res.send(participant);
        }).catch(err => res.status(500).send(err));
});

export default router;
