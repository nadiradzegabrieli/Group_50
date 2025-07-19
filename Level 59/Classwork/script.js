function calculateGrade(a, b, c) {
    let avg = (a + b + c) / 3;
    let grade;

    if (avg > 90 && avg <= 100) {
        grade = 'A';
    } else if (avg > 70 && avg <= 80) {
        grade = 'B';
    } else if (avg > 50 && avg <= 65) {
        grade = 'C';
    } else if (avg > 25 && avg <= 50) {
        grade = 'D';
    } else {
        grade = 'წადი ისწავლე და მერე მოდი';
    }

    return `საშუალო ქულა: ${avg.toFixed(2)}, შეფასება: ${grade}`;
}


console.log(calculateGrade(95, 92, 94)); 
console.log(calculateGrade(75, 78, 72)); 
console.log(calculateGrade(55, 60, 62)); 
console.log(calculateGrade(30, 40, 35)); 
console.log(calculateGrade(10, 20, 15)); 

