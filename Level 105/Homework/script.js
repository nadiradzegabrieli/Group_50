
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log("First:", firstColor); 
console.log("Second:", secondColor); 


const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia"
};
const { name, country } = user;
console.log("User:", name, "-", country);

const person = {
  name: "Nino",
  age: 28
};
const { country: personCountry = "Unknown" } = person;
console.log("Person Country:", personCountry); 


const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};
printUser({ name: "Mariam", age: 22 });


const numbers = [10, 20, 30, 40, 50];
const [firstNumber, ...restNumbers] = numbers;
console.log("First:", firstNumber);
console.log("Rest:", restNumbers); 


const student = {
  name: "Luka",
  marks: {
    math: 90,
    physics: 85
  }
};
const { marks: { math, physics } } = student;
console.log("Math:", math); 
console.log("Physics:", physics); 