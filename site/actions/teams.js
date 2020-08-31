export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';
export const GET_TEAM = 'GET_TEAM';

export function getTeam(id) {
    return { type: GET_TEAM, id };
}
