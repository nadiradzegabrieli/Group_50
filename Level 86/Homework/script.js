// 1 Homework

let word = "sun"; 
let language = prompt("შეიყვანე თარგმნის ენა: ქართული, ინგლისური, ფრანგული");

switch (language.toLowerCase()) {
  case "ქართული":
    console.log("თარგმანი ქართულად: მზე");
    break;
  case "ინგლისური":
    console.log("Translation in English: sun");
    break;
  case "ფრანგული":
    console.log("Traduction en français: soleil");
    break;
  default:
    console.log("ასეთი ენა არ მოიძებნება. სცადე თავიდან.");
}


// 2 Homework

let hour = prompt("შეიყვანე საათი (0-23):");

if (hour >= 5 && hour < 12) {
  console.log("დღის მონაკვეთი: დილა");
} else if (hour >= 12 && hour < 17) {
  console.log("დღის მონაკვეთი: შუადღე");
} else if (hour >= 17 && hour < 21) {
  console.log("დღის მონაკვეთი: საღამო");
} else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
  console.log("დღის მონაკვეთი: ღამე");
} else {
  console.log("გთხოვ სწორად შეიყვანე საათი (0-23)");
}