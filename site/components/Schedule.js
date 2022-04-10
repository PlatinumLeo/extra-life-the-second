import React from 'react';
import { Box } from '@mui/material';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';

import { schedule2021 as schedule } from '../assets/data/scheduleData';

const firstDay = '2021-11-06';
const secondDay = '2021-11-07';

const ROOT_SX = {
  '& table>tbody>tr>td>div': {
    '&>p': {
      color: (theme) => theme.palette.text.primary
    },
    '&>div': {
      color: (theme) => theme.palette.text.primary
    },
    '&>span': {
      color: (theme) => theme.palette.text.primary
    }
  }
};

const Schedule = () => {
    return (
      <Box sx={ROOT_SX}>
        <Scheduler data={schedule}>
          <ViewState currentDate={firstDay} />
          <DayView 
            startDayHour={12}
            endDayHour={24} />
          <Appointments />
          <CurrentTimeIndicator
            shadePreviousCells={true}
            shadePreviousAppointments={true}
            updateInterval={5 * 60 * 1000} />
        </Scheduler>
        <Scheduler data={schedule}>
          <ViewState currentDate={secondDay} />
          <DayView 
            startDayHour={0}
            endDayHour={13} />
          <Appointments />
          <CurrentTimeIndicator
            shadePreviousCells={true}
            shadePreviousAppointments={true}
            updateInterval={5 * 60 * 1000} />
        </Scheduler>
      </Box>
    );
};

export default Schedule;
