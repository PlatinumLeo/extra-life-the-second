import React from 'react';
import { Paper } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';

import { schedule2021 as schedule } from './scheduleData';

const firstDay = '2021-11-06';
const secondDay = '2021-11-07';

const Schedule = () => {
    return (
      <React.Fragment>
        <Paper>
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
        </Paper>
        <Paper>
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
        </Paper>
      </React.Fragment>
    );
};

export default Schedule;
