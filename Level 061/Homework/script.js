// 1. 1-დან 10-მდე რიცხვების ჯამი
let sumNumbers = 0;
for (let i = 1; i <= 10; i++) {
    sumNumbers += i;
}
console.log("1-დან 10-მდე რიცხვების ჯამი:", sumNumbers);

// 2. რიცხვების კვადრატი
for (let i = 1; i <= 10; i++) {
    console.log(`${i}-ის კვადრატი არის ${i ** 2}`);
}

// 3. სტრინგის თითოეული ასოს დაბეჭდვა
let text = "გამარჯობა";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// 4. FizzBuzz პროგრამა
for (let i = 1; i <= 20; i++) {  // შეგიძლია დიაპაზონი შეცვალო
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

