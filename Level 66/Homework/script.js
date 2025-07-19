// 1 Homework

// Constructor function for Person
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    // Method to introduce the person
    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}

// Creating a new Person object
const person1 = new Person("Alice", 30, "Software Engineer");

// Calling the introduce method
person1.introduce();

// 2 Homework

// Constructor function for Book
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // Method to return a summary of the book
    this.getSummary = function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
}

// Creating three book objects
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// Calling the getSummary method for each book
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

// 3 Homework

// Constructor function for User
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    // Method to change the user's password
    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log("Password changed successfully!");
    };

    // Method to return user details (excluding password)
    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

// Creating a new user object
const user1 = new User("techGuru", "techguru@example.com", "securePass123");

// Displaying user details
console.log(user1.getDetails());

// Changing the password
user1.changePassword("newSecurePass456");

// Displaying updated user details
console.log(user1.getDetails());