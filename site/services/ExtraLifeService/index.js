import axios from 'axios';

const url = '/api/';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/51804`),
    getTeamDonations: () => axios.get(`${url}teams/51804/donations`)
};

export default ExtraLifeService;
