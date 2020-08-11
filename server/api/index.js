import express from 'express';

import teams from './teams';

const router = express.Router();

router.use('/teams', teams);

export default router;
