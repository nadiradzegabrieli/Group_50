// innerHTML გაძლევს საშუალებას წაიკითხო ან შეცვალო ელემენტის შიგნით არსებული HTML სტრუქტურა
element.innerHTML = "<strong>გამარჯობა</strong>";

// innerText გაძლევს საშუალებას წაიკითხო ან შეცვალო მხოლოდ ხილული ტექსტი — HTML ტეგების გარეშე
element.innerText = "გამარჯობა";


// 1. getElementById — ცვლის სათაურს
const title = document.getElementById("title");
title.innerText = "გამარჯობა, სტუმარო!";

// 2. getElementsByClassName — ყველა ელემენტს აძლევს ფონურ ფერს
const items = document.getElementsByClassName("highlight");
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}

// 3. getElementsByTagName — ყველა <p> ელემენტს bold ტექსტი
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.style.fontWeight = "bold";
}

// 4. innerHTML — ცვლის HTML სტრუქტურას შიგნით
const box = document.getElementById("box");
box.innerHTML = "<em>ახალი <strong>HTML</strong> კონტენტი</em>";

// 5. innerText — ცვლის მხოლოდ ტექსტურ შიგთავსს
box.innerText = "მარტივი ტექსტი, ტეგების გარეშე";

// 6. style — ცვლის CSS სტილებს პირდაპირ JS-იდან
const styled = document.getElementById("styled");
styled.style.color = "green";
styled.style.fontSize = "24px";
styled.style.border = "2px solid black";

