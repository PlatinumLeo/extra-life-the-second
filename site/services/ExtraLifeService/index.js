import axios from 'axios';

const url = '/api/';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/51804`),
};

export default ExtraLifeService;
