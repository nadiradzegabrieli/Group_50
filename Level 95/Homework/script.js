// 1 Homework

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

function filterOddValuesAtOddIndices(arr) {
  return arr.filter((value, index) => index % 2 !== 0 && value % 2 !== 0);
}

console.log("Original:", randomNumbers);
console.log("Filtered:", filterOddValuesAtOddIndices(randomNumbers));

// 2 Homework

const users = [
  { name: "Giorgi", age: 17 },
  { name: "Ana", age: 22 },
  { name: "Nika", age: 19 },
  { name: "Tamar", age: 15 },
  { name: "Luka", age: 18 }
];

const adults = users.filter(user => user.age >= 18);

console.log("Adults:", adults);

// 3 Homework

const students = [
  { name: "Giorgi", surname: "Kapanadze", scores: [100, 95, 90] },
  { name: "Ana", surname: "Gelashvili", scores: [88, 72, 91] },
  { name: "Nika", surname: "Beridze", scores: [93, 96, 92] },
  { name: "Luka", surname: "Abashidze", scores: [84, 80, 89] },
  { name: "Salome", surname: "Kikvadze", scores: [97, 92, 94] }
];

function getAverage(scores) {
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

const topStudents = students.filter(student => getAverage(student.scores) >= 90);

const topStudentNames = topStudents.map(student => student.name);

console.log("Top Students:", topStudentNames);

