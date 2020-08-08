import React from 'react';

import { Route, Switch } from 'react-router-dom';

import LandingPage from '../../pages/LandingPage';
import { Typography } from '@material-ui/core';

const Router = props => {
    return (
        <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='*' render={() => (<Typography variant="h2">Page Not Found</Typography>)}/>
        </Switch>
    );
}

export default Router;