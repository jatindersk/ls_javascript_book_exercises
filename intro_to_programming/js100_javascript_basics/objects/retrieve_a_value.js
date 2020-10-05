let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

let courseInfo = student.courses; // student['courses']; // Always pass the key name as a string while using bracket notation and passing key name in a variable in Objects
// console.log(student.locker);
console.log(courseInfo);