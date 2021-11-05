import React from 'react';
import { connect } from 'react-redux';
import './Donation.css'

import {
  Grid,
  ImageList,
  ImageListItem,
  Typography
} from '@mui/material';
import Skeleton from '@mui/lab/Skeleton';

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
        <Grid item xs={12}>
          {goalComponent()}
        </Grid>
        <Grid item xs={12} lg={6}>
          <DonationList />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DonorList />
        </Grid>
      </React.Fragment>
    );
};

export default connect(mapStateToProps)(Donation);
