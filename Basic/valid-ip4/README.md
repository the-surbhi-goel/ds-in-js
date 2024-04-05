# Check IPV4 Address

Write a function to check given IP-address is IPV4 or not.
An IPV4 address should consist of 4 octets with values between 0 and 255.

### Requirements

```
/**
    * Function must accept a string
    * Function must return true or false
*/
```

### Function Signature

```
/**
 * @param {string} 
 * @returns {boolean}
 */
 function isValidIPV4(string): boolean;
```

### Example

```
isValidIPV4("0.0.0.0"); // return true
isValidIPV4("255.255.255.255"); // return true
isValidIPV4("0.133.255.255"); // return true
isValidIPV4("0.133.455.255"); // return false
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
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
```

</details>
