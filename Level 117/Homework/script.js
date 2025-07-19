// მშობელი კლასი
class Car {
  constructor(brand, maxSpeed, color) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.color = color;
  }

  getInfo() {
    return `ეს არის ${this.brand}, რომლის მაქს. სიჩქარეა ${this.maxSpeed} km/h და ფერი — ${this.color}`;
  }
}

// შვილეული კლასები
class BMW extends Car {
  constructor() {
    super("BMW", 250, "ლურჯი");
    this.image = "assets/bmw.jpg";
    this.sound = "assets/bmw.mp3";
  }
}

class Mercedes extends Car {
  constructor() {
    super("Mercedes", 240, "თეთრი");
    this.image = "assets/mercedes.jpg";
    this.sound = "assets/mercedes.mp3";
  }
}

class Audi extends Car {
  constructor() {
    super("Audi", 260, "შავი");
    this.image = "assets/audi.jpg";
    this.sound = "assets/audi.mp3";
  }
}

// ობიექტების შექმნა
const cars = {
  bmw: new BMW(),
  mercedes: new Mercedes(),
  audi: new Audi()
};

let currentCar = null;

function showCar(name) {
  currentCar = cars[name];
  document.getElementById("car-image").src = currentCar.image;
  document.getElementById("car-audio").src = currentCar.sound;
  document.getElementById("car-info").classList.remove("hidden");
  document.getElementById("car-details").textContent = `${name} არჩეულია 🚗`;
}

function playSound() {
  document.getElementById("car-audio").play();
}

function showInfo() {
  document.getElementById("car-details").textContent = currentCar.getInfo();
}