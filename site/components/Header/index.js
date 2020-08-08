import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Extra Life - Slalom Atlanta
                    </Typography>
                    <Button color="secondary" variant="contained" href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">Donate</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
