import axios from 'axios';

const url = 'https://www.extra-life.org/api/';

const ExtraLifeService = {
    getTeam: () => axios.get(`${url}teams/51804`),
};

export default ExtraLifeService;
