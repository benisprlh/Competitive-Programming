function dayOfProgrammer(year) {
  // Write your code here
  let dayOfFebruary = 28;
  if (year < 1918) {
    if (year % 4 === 0) dayOfFebruary = 29;
  } else if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 10 !== 0)) dayOfFebruary = 29;
  } else {
    dayOfFebruary = 19;
  }

  let totalDay = 31 + dayOfFebruary + 31 + 30 + 31 + 30 + 31 + 31;

  let result = 256 - totalDay;

  if (result < 10) {
    result = `0${result}`;
  }

  return `${result}.09.${year}`;
}

// 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243
console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
