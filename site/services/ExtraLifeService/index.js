import axios from 'axios';

const url = '/api/';
const teamId = '57288';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/${teamId}`),
    getTeamDonations: () => axios.get(`${url}teams/${teamId}/donations`),
    getTeamDonors: () => axios.get(`${url}teams/${teamId}/donors`)
};

export default ExtraLifeService;
