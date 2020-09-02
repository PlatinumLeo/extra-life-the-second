import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';

const firstDay = '2020-11-07';
const secondDay = '2020-11-08';

const mapStateToProps = state => ({
    schedule: state.schedule
});

const Schedule = ({ schedule }) => {
    return (
        <React.Fragment>
            <Paper>
                <Scheduler data={schedule}>
                    <ViewState currentDate={firstDay} />
                    <DayView 
                        startDayHour={11}
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
                        endDayHour={12} />
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

export default connect(mapStateToProps)(Schedule);
