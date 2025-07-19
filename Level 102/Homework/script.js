document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.getElementById("form-title");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const submitBtn = document.getElementById("submit-btn");
  const toggleLink = document.getElementById("toggle-link");

  let isLoginMode = false;

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    formTitle.textContent = isLoginMode ? "Login" : "Register";
    submitBtn.textContent = isLoginMode ? "Login" : "Register";
    toggleLink.textContent = isLoginMode
      ? "Register here"
      : "Login here";
  });

  submitBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    if (isLoginMode) {
      const storedPassword = localStorage.getItem(username);
      if (storedPassword === password) {
        alert(`Welcome back, ${username}!`);
        // აქ შეგიძლია გადამისამართო ToDo აპზე
      } else {
        alert("Incorrect username or password.");
      }
    } else {
      if (localStorage.getItem(username)) {
        alert("Username already exists.");
      } else {
        localStorage.setItem(username, password);
        alert("Registration successful! You can now log in.");
        // სურვილისამებრ დაარეგისტრე ახალი გვერდზე გადატანა
      }
    }

    // optional: input cleaning
    usernameInput.value = "";
    passwordInput.value = "";
  });
});