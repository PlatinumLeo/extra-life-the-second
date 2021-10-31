import React from 'react';

import {
    Grid,
    Link,
    Typography
} from '@material-ui/core';

const AboutUsPage = props => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">Extra Life - Slalom Atlanta Contacts</Typography>
        <Typography>Have a question or issue? Here's a directory of some of the people behind the event.</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4">Quick Contacts</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6">Alex Lyons</Typography>
        <Link href="mailto:alexander.lyons@slalom.com">alexander.lyons@slalom.com</Link>
        <Typography variant="h6">Anthony Luaders</Typography>
        <Link href="mailto:anthony.luaders@slalom.com">anthony.luaders@slalom.com</Link>
        <Typography variant="h6">Shah Zarani</Typography>
        <Link href="mailto:shah.zafrani@slalom.com">shah.zafrani@slalom.com</Link>
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
