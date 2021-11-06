import express from 'express';

import teams from './teams';
import twitch from './twitch';

let cache = new Map();
let cacheExpiration = new Map();
const router = express.Router();
const EXPIRATION_TIMEOUT = 1 * 30 * 1000; // 30 Second Cache Timer

let middleware = (req, res, next) => {
    const key = req.url;
    let now = new Date().getTime();
    let itemExpired = !cacheExpiration.has(key) || (now - cacheExpiration.get(key)) >= EXPIRATION_TIMEOUT;
    if (cache.has(key) && ! itemExpired) {
        res.send(cache.get(key));
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cache.set(key, body);
            cacheExpiration.set(key, now);
            res.sendResponse(body);
        }
        next();
    }
};

router.use('/teams', [middleware, teams]);
router.use('/twitch', twitch);

export default router;
