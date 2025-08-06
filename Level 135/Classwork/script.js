function createDelayedPromise() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 10000) + 1000; 
    setTimeout(() => {
      resolve(`დაბრუნდა მნიშვნელობა ${delay / 1000} წამში`);
    }, delay);
  });
}

function withTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("⏰ პრომისმა გადააჭარბა დროს (5 წამი)"));
    }, timeout);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

withTimeout(createDelayedPromise(), 5000)
  .then((result) => console.log("✅ წარმატება:", result))
  .catch((error) => console.error("❌ შეცდომა:", error.message));


  // 2 Classwork

  function delayedValue() {
  const delay = Math.floor(Math.random() * 10 + 1) * 1000; // 1–10 წამი
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`მნიშვნელობა დაბრუნდა ${delay / 1000} წამში`);
    }, delay);
  });
}

function timeout(limit = 5000) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`დროის ლიმიტი – ${limit / 1000} წამი გადაცილდა`));
    }, limit);
  });
}


Promise.race([delayedValue(), timeout()])
  .then((result) => {
    console.log("🏁 წარმატება:", result);
  })
  .catch((error) => {
    console.error("⛔ შეცდომა:", error.message);
  });


  