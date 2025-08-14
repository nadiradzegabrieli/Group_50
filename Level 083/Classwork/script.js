const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
  colorSpan.style.color = newColor;
});

