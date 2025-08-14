// Add & Remove a Class
const myDiv = document.getElementById("myDiv");
myDiv.classList.add("highlight");
myDiv.classList.remove("highlight");

// Toggle a Class
document.getElementById("toggleButton").addEventListener("click", () => {
  document.getElementById("targetDiv").classList.toggle("active");
});

// Check for a Class
const checkParagraph = document.getElementById("checkParagraph");
console.log(checkParagraph.classList.contains("important")); // true

// Replace a Class
const replaceDiv = document.getElementById("replaceDiv");
replaceDiv.classList.replace("red", "blue");

// item() Method
const itemDiv = document.getElementById("itemDiv");
console.log(itemDiv.classList.item(1)); // class2

// DOM Manipulation with <ul>
const list = document.getElementById("list");
const newLI = document.createElement("li");
newLI.textContent = "New Item";
list.appendChild(newLI);
list.removeChild(list.firstElementChild);
document.getElementById("specificItem").textContent = "Updated Item 3";

// Change Paragraph Text
document.getElementById("myParagraph").textContent = "New text content!";

// Change Element Style
const styledDiv = document.getElementById("styledDiv");
styledDiv.style.backgroundColor = "lightblue";
styledDiv.style.color = "darkblue";

// Append <li> to <ul>
const li = document.createElement("li");
li.textContent = "New list item";
document.getElementById("myList").appendChild(li);

// Remove Second <li>
const removableList = document.getElementById("removableList");
removableList.removeChild(removableList.children[1]);

// Modify Image Attributes
const img = document.getElementById("myImage");
img.src = "Captur.JPG";
img.alt = "Updated image";

