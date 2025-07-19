// 1 Homework

const mixedNames = ["gabi", "Nino", "giorgi", "Luka", "ana", "Sopo"];
const validNames = mixedNames.filter(name => name[0] === name[0].toUpperCase());
console.log(validNames); 

// 2 Homework

const numbers = [5, -12, 0, -3, 8, -7];
const positiveConverted = numbers
  .filter(num => num < 0)
  .map(num => Math.abs(num));
console.log(positiveConverted); 