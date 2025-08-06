async function fetchAllData() {
  const getUserInfo = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: 'giorgi', age: 22, location: 'Tbilisi' });
    }, 1200);
  });

  const getUserPosts = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postName: 'Summer Vibes', PostImage: 'summer.jpg' },
        { postName: 'Coding Time', PostImage: 'code.png' },
        { postName: 'Mountain Trip', PostImage: 'mountain.jpeg' },
      ]);
    }, 800);
  });

  const getUserFriends = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Nika', age: 23 },
        { name: 'Ana', age: 21 },
        { name: 'Saba', age: 24 },
      ]);
    }, 1500);
  });
  const results = await Promise.all([getUserInfo, getUserPosts, getUserFriends]);

  results.forEach((data) => {
    console.log(data);
  });
}

fetchAllData();


