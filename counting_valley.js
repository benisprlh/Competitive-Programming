function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let result = 0;
  for (let i of path) {
    if (i === 'D') {
      count--;
    } else {
      count++;
      if (count === 0) result++;
    }
  }
  console.log(result);
  return result;
}

countingValleys(10, 'DUDDDUUDUU');
