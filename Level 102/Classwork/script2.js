function Account(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

function createAccount() {
  const fn = document.getElementById("firstName").value;
  const ln = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  const newAccount = new Account(fn, ln, age, email);

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  accounts.push(newAccount);

  localStorage.setItem("accounts", JSON.stringify(accounts));

  console.log("აქტიური ექაუნთები:", accounts);
}