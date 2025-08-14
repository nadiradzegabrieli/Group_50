async function getRandomUser(){
  const num = Math.floor(Math.random() * 15) + 1;

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`);

  if(!response.ok){
    throw new Error(`მომხმარებელი ID=${num} ვერ მოიძებნა`)
  }

  const data = await response.json();
  console.log("მომხმარებლის ინფორმაცია:", data);
}

getRandomUser().catch(error => {
  console.error("შეცდომა:", error.message)
})



// const getUser = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 15) + 1; // 1–15
//   fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
//     .then(response => {
//       if (response.ok) {
//         resolve (response.json());
//       } else {
//         reject(`მომხმარებელი ID=${num} ვერ მოიძებნა`);
//       }
//     })
// });

// getUser.then(res => console.log(res))
//   .catch(error => console.error(error))



async function getPost(){
  const num = Math.floor(Math.random() * 15) + 1;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);

  if(!response.ok){
    throw new Error(`მომხმარებელი ID=${num} ვერ მოიძებნა`)
  }

  const data = await response.json();
  console.log("მომხმარებლის ინფორმაცია:", data);
}

getPost().catch(error => {
  console.error("შეცდომა:", error.message)
});



// const getPost = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 150) + 1; // 1–150
//   fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         reject(`პოსტი ID=${num} ვერ მოიძებნა`);
//       }
//     })
//     .then(data => resolve(data))
//     .catch(error => reject(`პოსტის მოთხოვნის შეცდომა: ${error}`));
// });


Promise.all([getRandomUser, getPost])
  .then(([user, post]) => {
    console.log("მომხმარებლის ინფორმაცია:");
    user().then(user => {
      console.log(user)
    });
    console.log("პოსტის ინფორმაცია:");
    post().then(post => {
      console.log(post)
    });
  })
  .catch(error => {
    console.error("მონაცემები ვერ მოიძებნა:");
    console.error(error);
  });

 