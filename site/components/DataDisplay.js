import React from 'react';

import Typography from '@material-ui/core/Typography';

const DataDisplayItem = ({ title, subtitle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography color='textSecondary' variant="h5">{title}</Typography>
    <Typography color='textSecondary' variant="caption" style={{ textTransform: 'uppercase' }}>{subtitle}</Typography>
  </div>
  )
};

const DataDisplay = ({ className, dataPoints }) => {
  return (
    <div className={className} style={{ border: '2px solid #fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      {dataPoints.map(({ title, subtitle }) => (
        <DataDisplayItem key={`display-${title}-${subtitle}`} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
};

export default DataDisplay;
