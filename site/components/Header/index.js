import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '@material-ui/styles';

import ControllerImage from '../../assets/images/Icons/controller_white.png';
import ElDiceImage from '../../assets/images/Icons/EL_dice.png';
import ExtraLifeLogo from '../../assets/images/Logos/Generic/Extra Life_white.png';

import useStyles from './styles';

const Header = props => {
    const classes = useStyles();
    const theme = useTheme();

    const isMobile = theme.breakpoints.values.sm >= props.dimensions.width

    const imageSrc = isMobile ? ControllerImage : ExtraLifeLogo;

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.toolbar}>
                <Toolbar>
                    <img src={imageSrc} className={classes.image} />
                    <Typography variant="h4" className={classes.title} align="center">
                        Slalom { isMobile ? '' : ' - Atlanta'}
                    </Typography>
                    <Button color="secondary" variant="outlined" href="https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=412259#donate" target="_blank">
                        {!isMobile && 
                        <Typography className={classes.buttonText}>
                            Donate
                        </Typography>
                        }
                        <img src={ElDiceImage} className={classes.buttonImage}/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
