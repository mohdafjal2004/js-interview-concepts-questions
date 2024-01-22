//Chaining the JS Methods

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//Remember: Map(), reduce() and filter() method allows chaining

//!  Q1: Filter out the students whose marks are more than 60
//! and then print the names
const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
console.log(names);

//!  Q2: Return total marks for students with marks greater than 60
// ! after 20 marks have been added to those who scored less than 60
const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
