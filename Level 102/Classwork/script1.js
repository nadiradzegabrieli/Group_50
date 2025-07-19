function addName() {
  const name = document.getElementById("nameInput").value;
  let names = JSON.parse(localStorage.getItem("nameList")) || [];
  names.push(name);
  localStorage.setItem("nameList", JSON.stringify(names));
  console.log("სახელების სია:", names);
}