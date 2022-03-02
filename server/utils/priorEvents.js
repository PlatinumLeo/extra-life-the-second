import priorEventData from '../data/priorEventData';

export function getPriorDonors(teamId) {
  let donors = [];
  donations = getPriorDonations(teamId);
  donations.forEach(d => {
    let index = donors.indexOf(p => p.email == d.email);
    if (index > -1) {
      donors[index].amount += d.amount;
    } else {
      donors.push({ email: d.email, amount: d.amount });
    }
  });

  return donors;
};

export function getPriorDonations(teamId) {
  let priorEvent = priorEventData.find(e => e.teamId == teamId);
  let donations = [];

  priorEvent.teamMembers.forEach(t => {
    if (typeof(t.donations) == Array) {
      donations.concat(t.donations)
    }
  });

  return donations;
};

export function getPriorTeam(teamId) {
  let priorEvent = priorEventData.find(e => e.teamId == teamId);
  return priorEvent;
};
