import axios from 'axios';

const url = '/api/';
const teamId = '57288';
const participantId = '562971';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/${teamId}`),
    getTeamDonations: () => axios.get(`${url}teams/${teamId}/donations`),
    getTeamDonors: () => axios.get(`${url}teams/${teamId}/donors`),
    getParticipant: () => axios.get(`${url}participants/${participantId}`),
    getParticipantDonations: () => axios.get(`${url}participants/${participantId}/donations`),
    getParticipantDonors: () => axios.get(`${url}participants/${participantId}/donors`),
};

export default ExtraLifeService;
