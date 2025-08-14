// 1-იდან 100-ის ჩათვლით ყველა 5-ის ჯერადი რიცხვი while ციკლით
let num = 1;

while (num <= 100) {
    if (num % 5 === 0) {
        console.log(num);
    }
    num++;
}
