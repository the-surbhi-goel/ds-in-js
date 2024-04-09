/**
 * Example of space complexity O(log n)
 */

function power(base, e) {
    if(e === 0){
        return 1;
    }
    return base * power(base, e-1);
}

console.log("Power of 2^3 ", power(2, 3));