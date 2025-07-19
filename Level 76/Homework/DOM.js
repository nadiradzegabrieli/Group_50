// 1) Create and Append Elements
const newPara = document.createElement("p");
newPara.textContent = "This is a paragraph.";
document.body.appendChild(newPara);

// 2) Modify Existing Elements
const newHeading = document.createElement("h2");
newHeading.textContent = "Subheading.";
document.body.appendChild(newHeading);
newHeading.textContent = "Updated Subheading.";

// 3) Remove Elements
const newDiv = document.createElement("div");
newDiv.textContent = "This is a div.";
document.body.appendChild(newDiv);
document.body.removeChild(newDiv);

// 4) Access Child Elements
const newList = document.createElement("ul");
["Item 1", "Item 2", "Item 3"].forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  newList.appendChild(li);
});
document.body.appendChild(newList);
console.log("First child:", newList.firstElementChild.textContent);
console.log("Last child:", newList.lastElementChild.textContent);

// 5) Insert Elements Before Existing Elements
const insertedHeading = document.createElement("h3");
insertedHeading.textContent = "Inserted Heading.";
document.body.insertBefore(insertedHeading, document.body.firstElementChild);

// 6) Access Parent Elements
const span = document.createElement("span");
span.textContent = "This is a span.";
const container = document.getElementById("container");
container.appendChild(span);
console.log("Parent of span:", span.parentElement);