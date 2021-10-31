import React, { useContext } from 'react';
import {
  ImageList,
  Hidden,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';

import TeamTile from './TeamTile';
import teamData from './teamData';
import { buildArrayReducer } from '../../utils';
import { getTeamStyles } from './styles';
import { SizeContext } from '../../AdaptivityProvider';

const Team = (props) => {
  const theme = useTheme();
  const classes = getTeamStyles();

  const { width } = useContext(SizeContext);

  const iconStyle = {
    style: {
      color: theme.palette.primary.main
    }
  };

  const activeIconStyle = {
    style: {
      color: theme.palette.secondary.main
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" style={{ textTransform: 'uppercase' }}>Meet the Team</Typography>
      <hr className={classes.rule} />
      <Typography align="center" className={classes.text}>
        Our Extra Life team is comprised of Slalom employees who all feel passionate about gaming and helping out those who need it most; children and their families who are in need of medical assistance.
      </Typography>
      <Hidden smUp>
        <Carousel className={classes.carousel} animation='slide' autoPlay={false} indicatorIconButtonProps={iconStyle} activeIndicatorIconButtonProps={activeIconStyle}>
          {teamData.reduce(buildArrayReducer(2), []).map((pair, i) => (
            <ImageList gap={16} key={`team-carousel-item-${i}`}>
              {pair.map((member, j) => (
                <TeamTile data={member} key={`team-tile-${j}`} />
                ))}
            </ImageList>
          ))}
        </Carousel>
      </Hidden>
      <Hidden xsDown>
        <ImageList className={classes.carousel} gap={24}>
          {teamData.map((member, i) => (
            <TeamTile data={member} key={`team-tile-${i}`} cols={1}/>
          ))}
        </ImageList>
      </Hidden>
    </div>
  );
};

export default Team;
