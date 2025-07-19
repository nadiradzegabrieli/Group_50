// 1 Classwork

let Date = new Date()
 Date.setFullYear(1993)
Date.setMonth(7)
Date.setDate(12)

console.log(Date)

// 2 Classwork


    const now = new Date();
    document.getElementById("current").textContent = now.toLocaleString();
    now.setDate(now.getDate() + 5);
    now.setHours(now.getHours() + 3);
    document.getElementById("modified").textContent = now.toLocaleString();


