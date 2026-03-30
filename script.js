let in1 = document.querySelector('#fstIn');
let in2 = document.querySelector('#secIn');
let operator = document.querySelector('#operator');
let result = document.getElementById('res');

function calculate(valOne, valTwo, valOperator) {
  let ans;
  
  switch (valOperator) {
    case '+':
      ans = valOne + valTwo;
      break;
    case '-':
      ans = valOne - valTwo;
      break;
    case '*':
      ans = valOne * valTwo;
      break;
    case '/':
      if (valTwo === 0) return ""; // prevent divide by zero
      ans = valOne / valTwo;
      break;
    default:
      return "";
  }
  
  return ans;
}

function updateResult() {
  let val1 = parseFloat(in1.value);
  let val2 = parseFloat(in2.value);
  let op = operator.value;
  
  // check valid inputs
  if (isNaN(val1) || isNaN(val2)) {
    result.innerText = "";
    return;
  }
  
  let ans = calculate(val1, val2, op);
  
  // only show valid result
  result.innerText = ans !== undefined ? ans : "";
}

// Real-time listeners
in1.addEventListener("input", updateResult);
in2.addEventListener("input", updateResult);
operator.addEventListener("change", updateResult);
