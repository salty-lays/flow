let num = document.getElementById('num');

let varBtn = document.getElementById('varBtn');
let constBtn = document.getElementById('constBtn');
let letBtn = document.getElementById('letBtn')
    
let clicked = 'var';
varBtn.classList.add('clicked');
let value = 66;
function changeClicked(me) {
  removePrev();
  if (me === 'var') {
    clicked = 'var'
    varBtn.classList.add('clicked');
  }
  else if (me === 'const') {
    clicked = 'const'
    constBtn.classList.add('clicked');
  }
  else if (me === 'let') {
    clicked = 'let'
    letBtn.classList.add('clicked');
  }
  
  
}

const changeValue = () =>{
  
  if (clicked === 'var') {
    var varValue = value
    varValue++
    value = varValue;
    num.innerText = varValue;
  }
  else if (clicked === 'const') {
    const constValue = value;
    constValue++
    value = constValue;
    num.innerText = constValue;
  }
  else if (clicked === 'let') {
    let letValue = value;
    letValue++
    value = letValue;
    num.innerText = letValue;
  }
}

function removePrev() {
  letBtn.classList.remove('clicked')
  constBtn.classList.remove('clicked')
  varBtn.classList.remove('clicked')
}
changeValue();
