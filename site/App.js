import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { DonationActions, DonorActions, TeamActions } from './actions';
import Header from './components/Header';
import Router from './components/Router';

const teamId = '51804';

const mapDispatchToProps = dispatch => ({
    getDonations: id => {
        dispatch(DonationActions.getDonations(id));
    },
    getDonors: id => {
        dispatch(DonorActions.getDonors(id));
    },
    getTeam: id => {
        dispatch(TeamActions.getTeam(id));
    }
});

const App = props => {
    // TODO: should move saving this to redux store 
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);

        return () => window.removeEventListener('resize', updateWindowDimensions);
    });

    useEffect(() => {
        props.getDonations(teamId);
        props.getDonors(teamId);
        props.getTeam(teamId);
    }, []);

    const updateWindowDimensions = () => {
        setDimensions({width: window.innerWidth, height: window.innerHeight});
    }

    return (
        <>
            <Header dimensions={dimensions}/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </>
    );
};

export default connect(null, mapDispatchToProps)(App);
