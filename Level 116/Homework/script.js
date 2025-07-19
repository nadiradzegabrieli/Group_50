// მშობელი კლასი
class Transport {
  constructor(maxSpeed, color, fuel) {
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.fuel = fuel;
    this.distanceTraveled = 0;
  }

  refuel(liter) {
    if (typeof liter !== 'number' || liter < 0) {
      throw new Error("საწვავის რაოდენობა უნდა იყოს არაუარყოფითი რიცხვი.");
    }
    this.fuel += liter;
  }

  changeColor(color) {
    if (typeof color !== 'string') {
      throw new Error("ფერი უნდა იყოს ტექსტური (string) ტიპის.");
    }
    this.color = color;
  }

  getInfo() {
    return `ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
  }

  move(distance, fuelNeeded) {
    if (typeof distance !== 'number' || typeof fuelNeeded !== 'number') {
      throw new Error("მანძილი და საწვავის რაოდენობა უნდა იყოს რიცხვითი მნიშვნელობები.");
    }
    if (fuelNeeded > this.fuel) {
      throw new Error("საკმარისი საწვავი არ არის!");
    }
    this.fuel -= fuelNeeded;
    this.distanceTraveled += distance;
  }
}

// შვილეული კლასი — Car
class Car extends Transport {
  getInfo() {
    return `ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

// შვილეული კლასი — Plane
class Plane extends Transport {
  getInfo() {
    return `ეს არის თვითმფრინავი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

// შვილეული კლასი — Boat
class Boat extends Transport {
  getInfo() {
    return `ეს არის ნავი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

// ტესტირება
const myCar = new Car(220, 'წითელი', 30);
console.log(myCar.getInfo());
myCar.refuel(10);
myCar.move(50, 15);
console.log(myCar.getInfo());