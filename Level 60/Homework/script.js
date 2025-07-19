// 1 Homework

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "ორშაბათი";
        case 2: return "სამშაბათი";
        case 3: return "ოთხშაბათი";
        case 4: return "ხუთშაბათი";
        case 5: return "პარასკევი";
        case 6: return "შაბათი";
        case 7: return "კვირა";
        default: return "არასწორი დღე";
    }
}

let dayNumber = parseInt(prompt("შეიყვანეთ კვირის დღე (1-7):"));
console.log(getDayName(dayNumber));

// 2 Homework

let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let result = (number % 2 === 0) ? "ლუწი" : "კენტი";
console.log(result);

// 3 Homework

function getWeatherType(weatherNumber) {
    switch (weatherNumber) {
        case 1: return "მზიანი";
        case 2: return "წვიმიანი";
        case 3: return "მოღრუბლული";
        case 4: return "ქარიანი";
        default: return "არ არის დადგენილი";
    }
}

let weatherNumber = parseInt(prompt("შეიყვანეთ ამინდის ნომერი (1-4):"));
console.log(getWeatherType(weatherNumber));

// 4 Homework

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1: return "იანვარი";
        case 2: return "თებერვალი";
        case 3: return "მარტი";
        case 4: return "აპრილი";
        case 5: return "მაისი";
        case 6: return "ივნისი";
        case 7: return "ივლისი";
        case 8: return "აგვისტო";
        case 9: return "სექტემბერი";
        case 10: return "ოქტომბერი";
        case 11: return "ნოემბერი";
        case 12: return "დეკემბერი";
        default: return "არასწორი თვე";
    }
}

let monthNumber = parseInt(prompt("შეიყვანეთ თვის ნომერი (1-12):"));
let monthName = getMonthName(monthNumber);
let halfOfYear = (monthNumber >= 1 && monthNumber <= 6) ? "პირველი ნახევარი" : "მეორე ნახევარი";

console.log(`თვე: ${monthName}`);
console.log(`წლის ნახევარი: ${halfOfYear}`);

// Homework Ended Here.