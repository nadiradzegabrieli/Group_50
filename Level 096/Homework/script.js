// ობიექტის კონსტრუქტორი
function User(fullname, email, password) {
  this.fullname = fullname;
  this.email = email;
  this.password = password;
}

// რეგისტრაცია
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = document.getElementById("regFullname").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // შემოწმება დაკავებული იმეილისთვის
  const exists = users.some(user => user.email === email);
  if (exists) {
    alert("ეს იმეილი უკვე გამოყენებულია!");
    return;
  }

  const newUser = new User(fullname, email, password);
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("რეგისტრაცია წარმატებით დასრულდა!");

  showUser(newUser);
});

// ავტორიზაცია
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(user => user.email === email && user.password === password);

  if (foundUser) {
    alert("ავტორიზაცია წარმატებულია!");
    showUser(foundUser);
  } else {
    alert("მონაცემები არასწორია!");
  }
});

// მომხმარებლის მონაცემის ჩვენება
function showUser(user) {
  document.getElementById("userData").innerHTML = `
    <h1>User Data</h1>
    <p>Fullname: ${user.fullname}</p>
    <p>Email: ${user.email}</p>
    <p>Password: ${user.password}</p>
  `;
}