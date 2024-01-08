function gradingStudents(grades) {
  // Write your code here
  for (let i in grades) {
    if (grades[i] >= 38) {
      let num = grades[i];
      while (num % 5 !== 0) {
        num++;
      }
      if (num - grades[i] < 3) {
        grades[i] = num;
      }
    }
  }
  return grades;
}

gradingStudents([73, 67, 38, 33]);
