// 1 homework

let numbers = [10, 5, 2, 8, 3];

console.log(numbers[0] > numbers[1]);  // true
console.log(numbers[2] < numbers[3]);  // true
console.log(numbers[3] >= numbers[0]); // false
console.log(numbers[4] <= numbers[1]); // true
console.log(numbers[1] == numbers[4]); // false
console.log(numbers[2] != numbers[4]); // true
console.log(numbers[0] === 10);        // true

// 2 homework

// ორმაგი ბრჭყალები ("")
let text1 = "ეს არის ტექსტი ორმაგი ბრჭყალებით.";
console.log(text1);

// ერთჯერადი ბრჭყალები ('')
let text2 = 'ეს არის ტექსტი ერთჯერადი ბრჭყალებით.';
console.log(text2);

// ბრჭყალები `ბექთიქით` (``)
let text3 = `ეს არის ტექსტი ბექთიქით.`;
console.log(text3);

// ბექთიქის გამოყენება ცვლადით
let name = "გიორგი";
let greeting = `გამარჯობა, ${name}!`;
console.log(greeting);

// ორმაგი და ერთჯერადი ბრჭყალების კომბინაცია
let complexText = "ეს არის 'შერეული' ტექსტი.";
console.log(complexText);

// end of homework
