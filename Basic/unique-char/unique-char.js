const str1 = "abcdef";
const str2 = "abcdefe";

function uniqueChar(str) {
  const len1 = str.length;

  const set1 = new Set(str);
  const len2 = Array.from(set1).length;

  return len1 === len2;
}

console.log("Uniqueness of string ", str1, " = ", uniqueChar(str1));
console.log("Uniqueness of string ", str2, " = ", uniqueChar(str2));
