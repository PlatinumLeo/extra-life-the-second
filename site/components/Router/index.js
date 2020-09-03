import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import AboutUsPage from '../../pages/AboutUsPage';
import LandingPage from '../../pages/LandingPage';
import ParticipatePage from '../../pages/ParticipatePage';
import SchedulePage from '../../pages/SchedulePage';

const Router = props => {
    return (
        <Switch>
            <Route path='/aboutus' exact component={AboutUsPage} />
            <Route path='/participate' exact component={ParticipatePage} />
            <Route path='/schedule' exact component={SchedulePage} />
            <Route path='/' exact component={LandingPage} />
            <Route path='*' render={() => (<Typography variant="h2">Page Not Found</Typography>)}/>
        </Switch>
    );
}

export default Router;