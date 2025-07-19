// ✅ დავალება 1: Map და ცხოველები
const animals = new Map();
animals.set("Dog", "Woof");
animals.set("Cat", "Meow");
animals.set("Cow", "Moo");

console.log("🦁 Animal Sounds:");
for (const [name, sound] of animals) {
  console.log(`${name} says ${sound}`);
}

// ✅ დავალება 2: უნიკალური მომხმარებლები Set-ით
const names = ["Davit", "Nino", "Davit", "Saba", "Nino"];
const uniqueNames = new Set(names);

console.log("🙋 Unique User Names:");
for (const name of uniqueNames) {
  console.log(name);
}

// ✅ დავალება 3: ასინქრონული მიმდევრობა setTimeout-ით
console.log("⏳ Async Flow:");
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000);

setTimeout(() => {
  console.log("End");
}, 2000);

// ✅ დავალება 4: Map-ის გასუფთავება და შემოწმება
const colors = new Map();
colors.set("red", "#FF0000");
colors.set("green", "#00FF00");

colors.delete("red");

console.log("🎨 Map Keys Check:");
console.log("Has red:", colors.has("red"));   // false
console.log("Has green:", colors.has("green")); // true

// ✅ დავალება 5: რეალური მაგალითი კონცერტზე Set-ით
const attendees = ["Luka", "Ana", "Luka", "Nino", "Ana"];
const verified = new Set(attendees);

console.log("🎫 Checked Attendees:");
for (const person of verified) {
  console.log(`Checked: ${person}`);
}