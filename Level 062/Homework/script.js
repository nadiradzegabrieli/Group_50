// 1. პაროლის გამოცნობა
function guessPassword() {
    const password = "Group 55 is best";
    let attempts = 3;

    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");
        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return;
        }
        attempts--;
        if (attempts === 0) {
            alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
        }
    }
}

// 2. N რიცხვის ფაქტორიალის გამოთვლა
function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}

console.log("5-ის ფაქტორიალი:", factorial(5));  // შეგიძლია N შეცვალო ნებისმიერ რიცხვზე

// 3. უკუთვლა
function countdown() {
    let time = 100;
    while (time >= 0) {
        console.log(`დარჩენილია ${time} წამი`);
        time--;
    }
}

countdown();