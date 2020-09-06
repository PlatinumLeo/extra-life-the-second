export const FETCH_DONORS_REQUEST = 'FETCH_DONORS_REQUEST';
export const FETCH_DONORS_SUCCESS = 'FETCH_DONORS_SUCCESS';
export const FETCH_DONORS_FAILURE = 'FETCH_DONORS_FAILURE';
export const GET_DONORS = 'GET_DONORS';

export function getDonors(id) {
    return { type: GET_DONORS, id };
};
