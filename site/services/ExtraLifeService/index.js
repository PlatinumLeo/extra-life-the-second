import axios from 'axios';

const url = '/api/';
const teamId = '51804';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/${teamId}`),
    getTeamDonations: () => axios.get(`${url}teams/${teamId}/donations`),
    getTeamDonors: () => axios.get(`${url}teams/${teamId}/donors`)
};

export default ExtraLifeService;
