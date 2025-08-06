const getUser = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 15) + 1; // 1–15
  fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        reject(`მომხმარებელი ID=${num} ვერ მოიძებნა`);
      }
    })
    .then(data => resolve(data))
    .catch(error => reject(`მომხმარებლის მოთხოვნის შეცდომა: ${error}`));
});

const getPost = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 150) + 1; // 1–150
  fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        reject(`პოსტი ID=${num} ვერ მოიძებნა`);
      }
    })
    .then(data => resolve(data))
    .catch(error => reject(`პოსტის მოთხოვნის შეცდომა: ${error}`));
});


Promise.all([getUser, getPost])
  .then(([user, post]) => {
    console.log("მომხმარებლის ინფორმაცია:");
    console.log(user);
    console.log("პოსტის ინფორმაცია:");
    console.log(post);
  })
  .catch(error => {
    console.error("მონაცემები ვერ მოიძებნა:");
    console.error(error);
  });