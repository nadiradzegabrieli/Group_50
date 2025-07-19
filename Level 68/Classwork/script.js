// Academy ობიექტის შექმნა
let academy = {
    name: "Goa Academy",
    courses: ["JavaScript", "Python", "React"],
    socialLink: "https://GOA.com",
    reviews: [
        {
            name: "John Doe",
            status: "parent",
            review: "Great experience! Highly recommended."
        },
        {
            name: "Jane Smith",
            status: "child",
            review: "Loved the interactive sessions!"
        },
        {
            name: "Mike Johnson",
            status: "parent",
            review: "Very supportive instructors."
        }
    ]
};


console.log(Object.entries(academy));
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(academy.hasOwn("courses")); 

let additionalData = { member: "Active" };
let mergedAcademy = { ...academy, ...additionalData };

console.log(mergedAcademy);
Object.freeze(mergedAcademy);
console.log(Object.isFrozen(mergedAcademy)); 

