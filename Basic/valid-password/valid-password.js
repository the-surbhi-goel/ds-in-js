const str1 = "Ba345678";
const str2 = "password";

function isValidPassword(password) {

  if(password.length < 8 || password.length > 12) {
    return false;
  }

  const arr = password.split('');

  const hasUpperCase = arr.some((char)=>{
    return char === char.toUpperCase() && char !== char.toLowerCase();
  });

  const hasLowerCase = arr.some((char)=>{
    return char === char.toLowerCase() && char !== char.toUpperCase();
  });

  const hasDigits = arr.some((char)=>{
    return !isNaN(char)
  });

  return hasUpperCase && hasLowerCase && hasDigits;
}

console.log("Password ", str1, " is valid = ", isValidPassword(str1));
console.log("Password ", str2, " is valid = ", isValidPassword(str2));
