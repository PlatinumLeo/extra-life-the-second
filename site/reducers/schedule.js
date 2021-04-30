const initialState = [{
  startDate: '2020-11-07T11:00',
  endDate: '2020-11-07T11:15',
  title: "Opening Ceremonies"
}, {
  startDate: '2020-11-07T11:30',
  endDate: '2020-11-07T13:00',
  title: "Smash Bros. Casuals"
}, {
  startDate: '2020-11-07T13:30',
  endDate: '2020-11-07T16:30',
  title: "Rocket League"
}, {
  startDate: '2020-11-07T17:00',
  endDate: '2020-11-07T19:00',
  title: "Random Nonsense!"
}, {
  startDate: '2020-11-07T19:15',
  endDate: '2020-11-07T19:45',
  title: "Raffle Winner Announcements!"
}, {
  startDate: '2020-11-07T20:00',
  endDate: '2020-11-07T21:30',
  title: "Mega Man X4 Speed Run"
}, {
  startDate: '2020-11-07T22:00',
  endDate: '2020-11-08T00:00',
  title: "Among Us"
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
