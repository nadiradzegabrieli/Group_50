// სურათების მასივი
let images = ["html.jpeg", "css.jpeg", "js.jpeg"];
let num = 0;

// შემდეგი სურათის ფუნქცია
function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

// წინა სურათის ფუნქცია
function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

