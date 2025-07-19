// 1 Classwork

let result = 1;

for (let i = 1; i <= 10000; i++) {
    result *= i;
    if (result > 10000) {
        console.log(`Loop stopped at i = ${i}, result = ${result}`);
        break;
    }
}

// 2 Classwork

for (let num = 1; num <= 200; num++) {
    if (num % 3 === 0) {
        continue;
    }
    if (num === 105) {
        break;
    }
    console.log(num);
}

