const fs = require('fs');

let donations = [];

const allFileContents = fs.readFileSync('2021.csv', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  let data = line.split(',');
  let donation = {
    name: data[0],
    showName: (data[1] == 'Public') ? true : false,
    amount: data[2],
    showAmount: (data[3] == 'Public') ? true : false,
    dateTime: data[4],
    timezone: 'ET',
    email: data[5],
    message: data[6],
    showMessage: (data[7] == 'Public') ? true : false
  };
  donations.push(donation);
});

fs.writeFileSync('donations.json', JSON.stringify(donations));
