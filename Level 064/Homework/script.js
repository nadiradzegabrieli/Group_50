// 1 Homework

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "გამრავლება ნულზე დაუშვებელია!";
        case '**':
            return a ** b;
        case '%':
            return a % b;
        default:
            return "არასწორი ოპერატორი!";
    }
}

console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 5, '**')); 
console.log(calculate(10, 5, '%')); 

// 2 Homework

function sumOfSquares(a, b) {
    return a ** 2 + b ** 2;
}

console.log(sumOfSquares(3, 4)); 
console.log(sumOfSquares(5, 2)); 

// 3 Homework

function isEven(n) {
    return n % 2 === 0 ? "even" : "odd";
}

console.log(isEven(4));
console.log(isEven(7)); 

// 4. Repeat a string a given number of times
function repeatString(str, times) {
    return str.repeat(times);
}

// 5. Compare two words by length
function longerWord(word1, word2) {
    return word1.length > word2.length ? word1 : word1.length < word2.length ? word2 : "equal";
}

// 6. Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Formula: (C × 9/5) + 32 = F
}

// 7. Check if a number is positive
function isPositive(number) {
    return number > 0 ? "yes" : "no";
}

// 8. Double a number
function double(n) {
    return n * 2;
}

// 9. Return full name
function fullName(first, last) {
    return `${first} ${last}`;
}

// 10. Determine if age qualifies as adult or minor
function isAdult(age) {
    return age >= 18 ? "adult" : "minor";
}

// 11. Check if a word contains 'a' or 'A'
function hasA(word) {
    return word.includes('a') || word.includes('A') ? "yes" : "no";
}

// 12. Check if two numbers have the same last digit
function sameLastDigit(a, b) {
    return a % 10 === b % 10 ? "same" : "different";
}

// 13. Determine even or odd without using if
function evenOrOdd(n) {
    return ["odd", "even"][n % 2];
}

// 14. Check if a text is short or long (no if)
function isShort(text) {
    return ["long", "short"][text.length < 5 ? 1 : 0];
}

// 15. numberSign() - Function.

function numberSign(n) {
    return ["negative", "zero", "positive"][Math.sign(n) + 1];
}

console.log(numberSign(10)); 
console.log(numberSign(0));   
console.log(numberSign(-5));  

// The End