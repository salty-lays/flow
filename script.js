import { user } from './object.js'

  
const cont1 = document.getElementById('cont1');
const cont2 = document.getElementById('cont2');

function work1() {
  const input1 = document.getElementById('w1').value.trim().toLowerCase();
  
  cont1.innerText = user[input1]
}
function work2() {
  const input2 = document.getElementById('w2').value.trim().toLowerCase();
  if (input2.includes('height')) {
    cont2.innerText = user?.height || "Height isn't available"
  }
  else {
  cont2.innerText = user[input2] || 'Not found'
  }
}

document.getElementById('btn1').addEventListener('click',work1)
document.getElementById('btn2').addEventListener('click',work2)