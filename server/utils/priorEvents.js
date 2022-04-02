import priorEventData from '../data/priorEventData';

let teams = new Map();

priorEventData.forEach(team => {
  teams.set(team.teamdId, team)
});

export function getPriorDonors(teamId) {
  let donors = [];
  console.log('Calling getPriorDonors...');
  donations = getPriorDonations(teamId);
  donations.forEach(d => {
    let index = donors.indexOf(p => p.email == d.email);
    if (index > -1) {
      donors[index].amount += d.amount;
    } else {
      donors.push({ email: d.email, amount: d.amount });
    }
  });
  console.log(`Prior Donors: ${donors.length}`);

  return donors;
};

export function getPriorDonations(teamId) {
  let donations = [];
  let team = teams[teamId];

  if (!!team && !!team.teamMembers) {
    team.teamMembers.forEach(member => {
      if (Array.isArray(member.donations)) donations.push(member.donations);
    });
  }

  return donations;
};

export function getPriorTeam(teamId) {
  return teams[teamId];
};
