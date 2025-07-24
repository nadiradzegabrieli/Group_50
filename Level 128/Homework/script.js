// 1️⃣ Step 1, 2, 3 – თითო 1 წამიანი დაყოვნებით
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1"), 1000));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("Step 2"), 1000));
}
function step3() {
  return new Promise(resolve => setTimeout(() => resolve("Step 3"), 1000));
}

step1()
  .then(result => {
    console.log(result);
    return step2();
  })
  .then(result => {
    console.log(result);
    return step3();
  })
  .then(result => {
    console.log(result);
  });


// 2️⃣ რიცხვების ჯაჭვური გამრავლება
new Promise(resolve => resolve(2))
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => num * 4)
  .then(result => console.log("Final result:", result)); // 48


// 3️⃣ მისალმება "Hello, Gio!" 2 წამში
new Promise(resolve => setTimeout(() => resolve("Gio"), 2000))
  .then(name => `Hello, ${name}!`)
  .then(greeting => console.log(greeting));


// 4️⃣ შემთხვევითი რიცხვი და error-ჰენდლინგი
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    num > 5 ? resolve(num) : reject(`Low number: ${num}`);
  });
}

getRandomNumber()
  .then(num => console.log("High number:", num))
  .catch(err => console.log("Error:", err));


// 5️⃣ მომხმარებლის ინფორმაციის მოძიება / შეცდომა
function getUserInfo() {
  return new Promise((resolve, reject) => {
    const isUserFound = Math.round(Math.random());
    const timeToFindUser = Math.floor(Math.random() * 11); // 0-10 sec

    setTimeout(() => {
      if (isUserFound) {
        resolve({
          name: "Gabriel",
          surname: "Nadiradze",
          age: 13,
          gender: "Male"
        });
      } else {
        reject("User not found.");
      }
    }, timeToFindUser * 1000);
  });
}

getUserInfo()
  .then(
    user => console.log("User info:", user),
    error => console.log("Error:", error)
  );