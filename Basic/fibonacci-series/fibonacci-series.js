function fibonacciSeries(num) {
    if(num == 1) {
        console.log(0);
        return 0;
    }
    if(num == 2) {
        console.log(0);
        console.log(1);
        return 1;
    }

    num1 = 0;
    num2 = 1;

    for (let i = 2; i < num; i++) { 
        console.log(num1 + num2); 
        num2 = num1 + num2;
        num1 = num2 - num1;
    };
}

console.log("fibonacci-series for 10 numbers");
console.log(fibonacciSeries(10));