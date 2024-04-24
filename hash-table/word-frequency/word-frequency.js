function wordFrequency(str) {
    const words = str.toLowerCase().split(" ");
    const map = new Map();
    words.forEach(element => {
        if(map.has(element)){
            let prevCount = map.get(element);
            map.set(element, prevCount+1);
        } 
        else{
            map.set(element, 1);
        }
    });
    return map;
}


const str1 = 'hello hi hello';
console.log(str1);
console.log(wordFrequency(str1));

const str2 = 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet tempor Lorem ipsum dolor sit Lorem ipsum dolor sit amet';
console.log("\n", str2);
console.log(wordFrequency(str2));