import React from 'react';
import { Box } from '@mui/material';

import teamData from '../assets/data/teamData';
import NotchedImage from '../components/NotchedImage';
import FlipCard from '../components/FlipCard';
const alexData = teamData[0];

const PreviewPage = ({...props}) => {

  let flipCardSx = {
    width: '300px',
    height: '300px'
  };

  let front = (<NotchedImage src={alexData.image} />);
  let back = (<NotchedImage src={alexData.gameImage} reverse={true} />);

  return (
    <Box>
      <FlipCard front={front} back={back} sx={flipCardSx} />
    </Box>
  );
};

export default PreviewPage;
