// 🔁 CallBack ფუნქცია
function callBack(orderId) {
  console.log(`🎉 შეკვეთა #${orderId} დამთავრდა`);
}

// 🍽 OrderManager კლასი
class OrderManager {
  constructor() {
    this.activeOrders = new Map();
    this.completedOrders = new Set();
  }

  processOrder(orderId, customerName, callback) {
    this.activeOrders.set(orderId, customerName);
    console.log(`📦 მიღებულია ახალი შეკვეთა: #${orderId} (${customerName})`);

    setTimeout(() => {
      this.activeOrders.delete(orderId);
      this.completedOrders.add(customerName);
      callback(orderId);
      this.printStatus();
    }, 3000);
  }

  printStatus() {
    console.log("\n📋 აქტიური შეკვეთები:");
    for (const [id, name] of this.activeOrders) {
      console.log(`🕓 შეკვეთა #${id} - ${name}`);
    }

    console.log("\n✅ დასრულებული მომხმარებლები:");
    for (const name of this.completedOrders) {
      console.log(`✔️ ${name}`);
    }
    console.log("───────────────────────────────");
  }
}

// 🧪 ტესტირება - შეკვეთების დამატება
const manager = new OrderManager();

manager.processOrder(1, "Giorgi", callBack);
manager.processOrder(2, "Nino", callBack);
manager.processOrder(3, "Luka", callBack);