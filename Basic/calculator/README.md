# Calculator
Write a function to operate calcualtion on 2 numbers


## Requirements
/**
    * Function must accept 2 numbers and operation
    * Function must return a number
*/


## Function Signature
/**
 * @param {number} num1 
 * @param {number} num2 
 * @param {operator} opeartor 
 * @returns number
 */


## Example
function calculator(2, 3, '+'); // Returns 5
function calculator(5, 3, '-'); // Returns 2
function calculator(5, 3, '*'); // Returns 15
function calculator(50, 5, '/'); // Returns 10


## Solution

<details>
<summary>Click Here for solution</summary>

function calculator(num1, num2, opeartor) {
  switch (opeartor) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Invalid Operator");
  }
}
</details>