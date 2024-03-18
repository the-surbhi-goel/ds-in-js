function validAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const count1Obj = s1.split("").reduce((obj, char)=>{
    obj[char] = obj[char] ? obj[char] + 1 : 0;
    return obj;
  },{});

  const count2Obj = s2.split("").reduce((obj, char)=>{
    obj[char] = obj[char] ? obj[char] + 1 : 0;
    return obj;
  },{});

  const result = Object.keys(count1Obj).every(key => {
    return count1Obj[key] === count2Obj[key];
  });

  return result;
}

const result = validAnagram("listen", "silent");
console.log("are listen & silent anagram = " , result);

const result2 = validAnagram("hey", "bye");
console.log("are hey & bye anagram = " , result2);

