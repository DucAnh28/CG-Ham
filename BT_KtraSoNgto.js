function isPrime(number) {
    let count = 0;
    // let isPrime = false;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    if (count === 2) {
        return number;
    }
}
let x = +prompt("nhập tổng số nguyên tố mà bạn cần");
let dem = 0;
let i = 2;
while (dem<x){
    if (isPrime(i)){
        document.write(i+"<br>");
        dem++
    }
    i++;
}