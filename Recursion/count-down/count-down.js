function countDown(num) {
    if(num === 0) {
        console.log("Done");
        return;
    }
    console.log(num);
    countDown(num-1);
}

console.log("Count down for 5");
console.log(countDown(5));
