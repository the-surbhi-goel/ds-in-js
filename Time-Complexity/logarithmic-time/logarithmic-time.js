/**
 * Example of Logarithmic time O(log n)
 */

function power(base, e) {
    if(e === 0){
        return 1;
    }
    return base * power(base, e-1);
}

console.time("Time1");
console.log("Power of 2^3 ", power(2, 3));
console.timeEnd("Time1");

console.time("Time2");
console.log("Power of 3^15 ", power(3, 15));
console.timeEnd("Time2");

console.time("Time3");
console.log("Power of 2^15 ", power(2, 15));
console.timeEnd("Time3");
