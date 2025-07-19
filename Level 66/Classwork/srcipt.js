// 1st Classwork

class Flight {
  constructor(id, status) {
    this.id = id;
    this.status = status;
  }
  
  getMessage() {
    return `Flight ${this.id} has ${this.status}`;
  }
}

// ობიექტის შექმნა
const flight = new Flight("NGT 929", "landed");
console.log(flight.getMessage()); // გამოიტანს: "Flight NGT 929 has landed"

// 2nd Classwork

function createProduct(productID, price, discount) {
  return {
    productID: productID,
    price: price,
    discount: discount,
    changePrice: function() {
      this.price = this.price - (this.price * this.discount / 100);
    },
    displayInfo: function() {
      console.log(`Product ID: ${this.productID}, Discounted Price: ${this.price.toFixed(2)}`);
    }
  };
}

let product1 = createProduct(101, 50, 10); 
product1.changePrice();
product1.displayInfo();

