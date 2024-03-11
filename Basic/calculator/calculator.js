/**
 * @param {number} num1
 * @param {number} num2
 * @param {operator} opeartor
 * @returns number
 */
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

const result1 = calculator(2, 3, "+");
console.log("2 + 3 = ", result1);

const result2 = calculator(5, 3, '-');
console.log("5 - 3 = ", result2);

const result3 = calculator(5, 3, "*");
console.log("5 * 3 = ", result3);

const result4 = calculator(50, 5, "/");
console.log("50 / 5 = ", result4);

// Uncomment it to check the result
// const result5 = calculator(50, 5, "abs");
// console.log("50 abs 5 = ", result5);
