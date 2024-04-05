const str1 = 'abc';
const str2 = 'hello';

function reverseString(str) {
    if(str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log("Reverse of string ", str1 , ' is ', reverseString(str1));
console.log("Reverse of string ", str2 , ' is ', reverseString(str2));
