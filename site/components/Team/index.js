import React from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from '@material-ui/core';

import TeamTile from './TeamTile';

import teamData from './teamData';

const Team = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" align="center" style={{ textTransform: 'uppercase' }}>Meet the Team</Typography>
      <hr style={{ width: '100px', border: '3px solid' }} />
      <Typography align="center" style={{ maxWidth: '700px' }}>
        Our Extra Life team is comprised of Slalom employees who all feel passionate about gaming and helping out those who need it most; children and their families who are in need of medical assistance.
      </Typography>
      <ImageList rowHeight={360} cols={4} padding={20} style={{ maxWidth: '1440px' }}>
        {teamData.map((data, i) => (<TeamTile key={`team-tile-${i}`} data={data}/>))}
      </ImageList>
    </div>
  )
};

export default Team;
