export function calc(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      
    case "-":
      return num1 - num2;
      
    case "*":
      return num1 * num2;
      
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      
    default:
      return "Invalid operator";
  }
}