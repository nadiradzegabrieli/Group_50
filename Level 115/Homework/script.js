// მშობელი კლასი
class Shape {
  constructor(width, height, color, coordinates) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.coordinates = coordinates; // [x, y]
  }

  changeWidth(amount) {
    this.width += amount;
  }

  changeHeight(amount) {
    this.height += amount;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  moveTo(newCoordinates) {
    this.coordinates = newCoordinates;
  }

  draw() {
    console.log(`კოორდინატებზე - ${this.coordinates} იხატება ფიგურა, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`);
  }
}

// შვილეული კლასი: სამკუთხედი
class Triangle extends Shape {
  draw() {
    console.log(`კოორდინატებზე - ${this.coordinates} იხატება სამკუთხედი, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`);
  }
}

// შვილეული კლასი: მართკუთხედი
class Rectangle extends Shape {
  draw() {
    console.log(`კოორდინატებზე - ${this.coordinates} იხატება მართკუთხედი, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`);
  }
}

// შვილეული კლასი: წრე
class Circle extends Shape {
  draw() {
    console.log(`კოორდინატებზე - ${this.coordinates} იხატება წრე, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`);
  }
}

// მაგალითი გამოყენებაზე
const myTriangle = new Triangle(30, 40, "ლურჯი", [100, 200]);
myTriangle.draw();
myTriangle.changeColor("წითელი");
myTriangle.moveTo([120, 250]);
myTriangle.draw();