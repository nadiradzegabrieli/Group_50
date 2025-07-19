// ✅ 1) ფუნქცია, რომელიც მიიღებს n რაოდენობის რიცხვს და დაბეჭდავს ნამრავლსა და ჯამს
function calculateNumbers(a, b, ...rest) {
  const product = a * b;
  console.log("პირველი ორი რიცხვის ნამრავლი:", product);

  const sum = rest.reduce((acc, val) => acc + val, 0);
  console.log("დანარჩენი რიცხვების ჯამი:", sum);
}

// ფუნქციის გამოძახება მინიმუმ 5 არგუმენტით
calculateNumbers(3, 4, 5, 6, 7, 8);

// ✅ 2) სიების გაერთიანება spread ოპერატორით და დამატებითი ელემენტების ჩასმა
const list1 = ['🍎', '🍌', '🍇'];
const list2 = ['🐶', '🐱', '🐭'];
const list3 = ['🚗', '🚲', '✈️'];

const combinedList = [
  ...list1,
  ...list2,
  ...list3,
  '🌈',
  42,
  true,
  '🎨',
  null
];

console.log("გაერთიანებული სია:", combinedList);