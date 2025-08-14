function financialPlan(age, gender, income) {
    if (age >= 18) {
        if (gender.toLowerCase() === "ქალი") {
            if (income > 5000) {
                console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
            } else if (income > 3000) {
                console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        } else if (gender.toLowerCase() === "კაცი") {
            if (income > 6000) {
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            } else if (income > 4000) {
                console.log("შემოსავალი სტაბილურია");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        }
    } else {
        console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}

// მომხმარებლის მონაცემების შეყვანა
const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი: "));
const gender = prompt("შეიყვანეთ თქვენი სქესი (კაცი/ქალი): ");
const income = parseFloat(prompt("შეიყვანეთ თქვენი შემოსავალი: "));

// ფუნქციის გამოძახება
financialPlan(age, gender, income);