const str1 = "0.0.0.0";
const str2 = "255.255.255.255";
const str3 = "0.133.455.255";

function isValidIPV4(str) {
  const arr = str.split('.');

  if(arr.length !== 4) {
    return false;
  }

  const result = arr.every((octet) => {
    const num = parseInt(octet);
    return num.toString() === octet && num >=0 && num <= 255;

  });

  return result;
}

console.log("IP Address ", str1, " = ", isValidIPV4(str1));
console.log("IP Address ", str2, " = ", isValidIPV4(str2));
console.log("IP Address ", str3, " = ", isValidIPV4(str3));
