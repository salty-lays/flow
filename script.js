import { calc } from "./calculation.js";

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const res = document.getElementById('res');
const btn = document.querySelector('button');

const operators = ['+', '-', '/', '*'];

function calcAsync(num1, operator, num2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(calc(num1, operator, num2));
    }, 1000);
  });
}

async function checkforOper() {
  let operator = document.getElementById('operator').value;
  
  if (!operators.includes(operator)) {
    res.innerText = 'plz enter valid';
    return;
  }
  
  res.innerText = "Calculating...";
  
  const result = await calcAsync(
    Number(input1.value),
    operator,
    Number(input2.value)
  );
  
  res.innerText = result;
}

btn.addEventListener('click', checkforOper);