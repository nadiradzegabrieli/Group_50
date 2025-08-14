// 1 Homework

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Leap year
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// 2 Homework

const names = ["ანა", "ნიკა", "ლევანი", "თეკლა"];
const payer = names[Math.floor(Math.random() * names.length)];
console.log(`${payer} გადაიხდის დღეს 🍽️`);

// 3 Homework

function fizzbuzz(numbers) {
  return numbers.map(num => {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  });
}

// 4 Homework

function randomAverage(n) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * 100)); // 0-99
  }
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// End...........

