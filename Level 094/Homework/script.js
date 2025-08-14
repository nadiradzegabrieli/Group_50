// 1 Homework

const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Original:", numbers);
console.log("Even:", getEvenNumbers(numbers));
console.log("Odd:", getOddNumbers(numbers));

// 2 Homework

const fullNames = [
  "Giorgi Bibilashvili",
  "Tamar Gelashvili",
  "Nika Mamulashvili",
  "Ana Kapanadze"
];

function getInitials(names) {
  return names.map(name => {
    const parts = name.split(" ");
    return parts.map(p => p[0].toUpperCase()).join(".");
  });
}

console.log("Initials:", getInitials(fullNames)); 


// 3 Homework

const words = ["apple", "banana", "kiwi", "strawberry", "pear", "orange", "fig"];

function filterLongWords(arr) {
  return arr.filter(word => word.length > 5);
}

console.log("Words > 5 chars:", filterLongWords(words)); 