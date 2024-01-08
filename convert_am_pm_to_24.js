function timeConversion(s) {
  // Write your code here
  const format = s.slice(8);
  const hour = s.substring(0, 2);
  let result = '';
  let time = s.substring(8, 2);
  if (format === 'PM' && hour !== '12') {
    result = `${Number(hour) + 12}` + time;
  } else if (format === 'AM' && hour === '12') {
    result = `00` + time;
  } else if (format === 'PM' && hour === '12') {
    result = `12` + time;
  } else {
    time = s.substring(0, 8);
    result = time;
  }
  return result;
}

console.log(timeConversion('12:45:00PM'));
