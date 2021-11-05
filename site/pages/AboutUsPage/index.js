import React from 'react';
import {
  Box
} from '@mui/material';

import CallOut from '../../components/CallOut';

import teamData from '../../assets/data/teamData';

const memberToCallOut = (member) => ({
  title: member.name,
  content: [`Game: ${member.game}`, member.description],
  image: member.image,
  filter: false
});

const AboutUsPage = (props) => {

  return (
    <Box>
      {teamData.map(memberToCallOut).map((data, i) => (
        <CallOut {...data} leftAligned={(i % 2) == 0} key={`about-us-data-${i}`} />
      ))}
    </Box>
  );
};

export default AboutUsPage;
