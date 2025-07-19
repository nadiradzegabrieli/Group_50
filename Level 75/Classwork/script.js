// ელემენტის წამოღება ID-ით
const elementById = document.getElementById("first");
elementById.style.color = "white";
elementById.style.backgroundColor = "darkblue";
elementById.style.fontSize = "22px";
elementById.style.fontStyle = "italic";
elementById.textContent = "ID ელემენტი შეიცვალა!";

// ელემენტის წამოღება class-ით
const elementByClass = document.querySelector(".second");
elementByClass.style.color = "black";
elementByClass.style.backgroundColor = "lightgreen";
elementByClass.style.fontSize = "20px";
elementByClass.style.fontWeight = "bold";
elementByClass.textContent = "Class ელემენტი განახლდა!";

// ჩვეულებრივი ელემენტის წამოღება tag-ის მიხედვით
const elementByTag = document.getElementsByTagName("p");
elementByTag.style.color = "navy";
elementByTag.style.backgroundColor = "lightyellow";
elementByTag.style.fontSize = "18px";
elementByTag.style.textDecoration = "underline";
elementByTag.textContent = "ჩვეულებრივი ელემენტიც განახლდა!";


