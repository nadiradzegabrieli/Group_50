// 1 Homework

// წიგნის ობიექტის შექმნა
const book = {
    title: "დაკარგული სიმბოლო",
    author: "დენ ბრაუნი",
    year: 2009,
    genre: "თრილერი",
    price: 25.99
};

// პირველი ობიექტის გამოტანა
console.log(book);

// თვისებების გამოტანა Dot და Bracket Notation-ით
console.log("სათაური:", book.title); 
console.log("სათაური:", book["title"]);

console.log("ავტორი:", book.author); 
console.log("ავტორი:", book["author"]);

console.log("გამოშვების წელი:", book.year); 
console.log("გამოშვების წელი:", book["year"]);

console.log("ჟანრი:", book.genre); 
console.log("ჟანრი:", book["genre"]);

console.log("ფასი:", book.price); 
console.log("ფასი:", book["price"]);

// ყველა თვისების გამოყენებით წინადადების დაბეჭდვა
console.log(`წიგნის სახელწოდება "${book.title}" დაწერილია ${book.author}-ის მიერ. იგი გამოქვეყნდა ${book.year} წელს, მიეკუთვნება ჟანრს "${book.genre}" და ღირს ${book.price} ლარი.`);

// 2 Homework

// სტუდენტის ობიექტის შექმნა
const student = {
    name: "ნიკა გიორგაძე",
    age: 21,
    faculty: "კომპიუტერული მეცნიერებები",
    course: 3,
    gpa: 3.8
};

// პირველი ობიექტის გამოტანა
console.log(student);

// თვისებების გამოტანა Dot და Bracket Notation-ით
console.log("სახელი:", student.name); 
console.log("სახელი:", student["name"]);

console.log("ასაკი:", student.age); 
console.log("ასაკი:", student["age"]);

console.log("ფაკულტეტი:", student.faculty); 
console.log("ფაკულტეტი:", student["faculty"]);

console.log("კურსი:", student.course); 
console.log("კურსი:", student["course"]);

console.log("საშუალო ქულა:", student.gpa); 
console.log("საშუალო ქულა:", student["gpa"]);

// ყველა თვისების გამოყენებით წინადადების დაბეჭდვა
console.log(`სტუდენტის სახელი არის ${student.name}, მისი ასაკი არის ${student.age} წელი. ის სწავლობს ${student.faculty}-ის ფაკულტეტზე, ${student.course}-ე კურსზე და მისი საშუალო ქულა არის ${student.gpa}.`);

// END