//Output Based Questions for map(),filter() and reduce()

//! Q1:Generate only names but in CAPITAL LETTERS
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//? Method 1 using For-loop
let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
// console.log(names);

//? Method 2 using Map-Method
const Mapnames = students.map((stu) => stu.name.toUpperCase());
// console.log(Mapnames);

//! Q2: Get only the details of those students who scored more than 60 marks
const goodStudents = students.filter((stu) => stu.marks > 60);
console.log(goodStudents);

//! Q3 :Get only the details of those students who scored more than 60 marks
//!and whose roll numbers are more than 15
const rollPlusMarks = students.filter((stu) => {
  const result = stu.marks > 60 && stu.rollNumber > 15;
  return result;
});
// console.log(rollPlusMarks);

//! Q4 : Sum of marks of all the students
const sumMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sumMarks)

