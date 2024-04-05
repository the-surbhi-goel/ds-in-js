# Check Valid PAssword

Write a function to validate password with following constraints:
  1. Password must be atleast 8 characters long
  2. Password must contain atleast one lowercase letter, one uppercase letter
     and one digit.
  3. Password length must not exceed 12 charcters

### Requirements

```
/**
    * Function must accept a string
    * Function must return true if password is valid otherwise must return false
*/
```

### Function Signature

```
/**
 * @param {string} 
 * @returns {boolean}
 */
 function isValidPassword(string): boolean;
```

### Example

```
isValidPassword("Aa345678"); // return true
isValidPassword("password"); // return false
isValidPassword("PASSWORD"); // return false
isValidPassword("12345678"); // return false
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
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
```

</details>
