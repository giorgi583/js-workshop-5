// davaleba 1
let arr = [
  [150, 20, 10],
  [55, 11, 260, 45],
  [1, 28],
];

let sums = arr.map((element) => element.reduce((a, b) => a + b, 0));

let sum1 = sums[0];
let sum2 = sums[1];
let sum3 = sums[2];
let sum = sums.reduce((a, b) => a + b, 0);
console.log(sum1, sum2, sum3, sum);

// davaleba 2
const students = [
  { id: 1, name: "Ana", grades: [85, 90, 78], isActive: true },
  { id: 2, name: "Luka", grades: [60, 75, 70], isActive: false },
  { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true },
  { id: 4, name: "Gio", grades: [40, 55, 48], isActive: true },
];
// 1
let names = students.map((element) => element.name).map((a) => a.toUpperCase());
console.log(names);
// 2
let active = students.filter((element) => element.isActive);
console.log(active);
// 3
students.forEach (element => {
  if (element.isActive) {
    console.log(`${element.name} aris aqtiuri`);
  } else {
    console.log(`${element.name} ar aris aqtiuri`);
  }
})

// 4
let isMoreThan50 = students.every(
  (element) =>
    element.grades.reduce((a, b) => a + b, 0) / element.grades.length > 50
);
console.log(isMoreThan50);
// 5
let isMoreThan90 = students.some(
  (element) =>
    element.grades.reduce((a, b) => a + b, 0) / element.grades.length > 90
);
console.log(isMoreThan90);
// 6
let maya = students.filter((element) => element.name == "Maya");
console.log(maya);
