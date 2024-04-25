import { Stack } from "../custom-stack/stack.js";

function isBalanceParenthesis(str) {
  const stack = new Stack();
  const len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

const str1 = "()()";
console.log(`Is ${str1} balanced: `, isBalanceParenthesis(str1));

const str2 = "(()))";
console.log(`Is ${str2} balanced: `, isBalanceParenthesis(str2));
