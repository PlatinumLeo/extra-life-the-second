import React from 'react';
import {
  ImageList,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';

import TeamTile from './TeamTile';

import teamData from './teamData';

const getTeamStyles = makeStyles((theme) => ({
  root: { padding: '48px 0 24px 0' },
  rule: { border: `1px solid ${theme.palette.primary.main}`, width: '60px' },
  text: { lineHeight: '170%', padding: '32px 24px' },
  button: { left: 'calc(50% - 100px)', height: '48px', width: '200px' },
  carousel: { padding: '0 24px' }
}));

const Team = (props) => {
  const theme = useTheme();
  const classes = getTeamStyles(theme);

  const dataPairs = [];
  let tempArray = [];
  for(let i = 0; i < teamData.length; i++) {
    tempArray.push(teamData[i]);
    if (tempArray.length == 2) {
      dataPairs.push(tempArray);
      tempArray = [];
    }
  }
  if (tempArray.length > 0) { dataPairs.push(tempArray); }
  console.log(dataPairs);

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
      <Carousel className={classes.carousel} animation='slide' autoPlay={false} indicatorIconButtonProps={iconStyle} activeIndicatorIconButtonProps={activeIconStyle}>
        {dataPairs.map((pair, i) => (
          <ImageList rowHeight={150} cols={2} key={`team-carousel-item-${i}`}>
            {pair.map((member, j) => (
              <TeamTile data={member} key={`team-tile-${j}`} />
            ))}
          </ImageList>
        ))}
      </Carousel>
    </div>
  );
};

export default Team;
