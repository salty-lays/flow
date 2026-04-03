let heads = document.querySelector('.heads');
let timer = document.getElementById('timer');
let body = document.querySelector('body');
let input = document.getElementById('color');
let result = document.getElementById('result');
let resetBtn = document.getElementById('reset');


function started() {
  let colors = ['red','blue','green','pink','yellow','lightgreen','hotpink','orange','brown'];

let randomColor = colors[Math.floor(Math.random() * colors.length)];

  heads.style.display = 'none';
  input.style.display = 'flex';
  body.style.backgroundColor = randomColor;
  for (let i = 5; i >= 0; i--) {
   setTimeout(() =>{
     timer.innerText = i;
   },(5-i) * 1000)
  }
  setTimeout(() => {
    
    result.style.display = 'flex';
    resetBtn.style.display = 'flex'
    if (input.value.toLowerCase() === randomColor) {
      result.innerText = 'THAT WAS EASY';
      result.style.color = 'lightblue';
    } else {
      result.innerText = 'AHH LAMEE';
      result.style.color = 'black';
    }
  }, 5000);
}

function resetPlz() {
  input.value = '';
  result.innerText = '';
  resetBtn.style.display = 'none';
  started();
}
