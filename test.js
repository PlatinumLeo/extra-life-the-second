const specialAddition = (input) => {
  var runningTotal;
  var isSingleDigit = false;

  while(!isSingleDigit) {
    runningTotal = 0;
    while(input > 0) {
      runningTotal += input % 10;
      input = Math.floor(input / 10);
    }

    isSingleDigit = runningTotal < 10;

    if (!isSingleDigit) input = runningTotal;
  }

  return runningTotal;
};

const recursionAddition = (input) => {
  var runningTotal = 0;
  while(input > 0) {
    runningTotal += input % 10;
    input = Math.floor(input / 10);
  }

  if (runningTotal < 10) return runningTotal;
  
  return recursionAddition(runningTotal);
}

const specialAdditionEx = (input) => {
  var total = 0;

  while(input > 0) {
    total += input % 10;
    input = Math.floor(input / 10);
  }

  console.log(total);

  return total % 9;
};

console.log(`Modulo 10: ${specialAddition(1437584679246573)}`);
console.log(`Module 9: ${specialAdditionEx(1437584679246573)}`);
console.log(`Recurrsion: ${recursionAddition(1437584679246573)}`);
