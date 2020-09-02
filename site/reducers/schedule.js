const initialState = [{
    startDate: '2020-11-07T11:00',
    endDate: '2020-11-07T11:15',
    title: "Opening Ceremonies"
}, {
    startDate: '2020-11-07T14:00',
    endDate: '2020-11-07T19:00',
    title: "Smash Bros. Tournament"
}, {
    startDate: '2020-11-07T15:00',
    endDate: '2020-11-07T16:00',
    title: "FallGuys FunTimes"
}, {
    startDate: '2020-11-07T20:00',
    endDate: '2020-11-07T21:30',
    title: "Mega Man X4 Speed Run"
}, {
    startDate: '2020-11-08T00:00',
    endDate: '2020-11-08T06:00',
    title: "Devil May Cry V"
}, {
    startDate: '2020-11-08T09:00',
    endDate: '2020-11-08T11:00',
    title: "Kartastrophy (SRB2K)"
}, {
    startDate: '2020-11-08T11:00',
    endDate: '2020-11-08T11:15',
    title: "Closing Ceremonies"
}];

const schedule = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default schedule;
