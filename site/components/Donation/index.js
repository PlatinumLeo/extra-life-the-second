import React from 'react';
import { connect } from 'react-redux';
import './Donation.css'

import {
    GridList,
    GridListTile,
    Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import DonationList from './DonationList';
import DonorList from './DonorList';

const mapStateToProps = state => ({
    fundraisingGoal: state.team.fundraisingGoal,
    sumDonations: state.team.sumDonations
});

const Donation = ({ fundraisingGoal, sumDonations }) => {
    const goalComponent = () => {
        if (!fundraisingGoal || !sumDonations) {
            return (<Skeleton variant="text" />);
        }

        let percent = Math.min(100, Math.max(1, Math.floor(sumDonations / fundraisingGoal * 100)));

        const spanStyle = {
            width: `${percent}%`
        };

        return (
            <React.Fragment>
                <Typography variant="h2">
                    Goal: ${sumDonations}/${fundraisingGoal}
                </Typography>
                <div className="meter">
                    <span style={spanStyle}><span></span></span>
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <GridList cols={1}>
                <GridListTile>
                    <Typography variant="h1">Extra Life Slalom Atlanta</Typography>
                </GridListTile>
                <GridListTile>{goalComponent()}</GridListTile>
            </GridList>
            <GridList cols={2}>
                <GridListTile><DonationList /></GridListTile>
                <GridListTile><DonorList /></GridListTile>
            </GridList>
        </React.Fragment>
    );
};

export default connect(mapStateToProps)(Donation);
