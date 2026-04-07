let btn = document.getElementById('btn');
let circle = document.getElementById('circle');
let body = document.querySelector('body');
let h1 = document.querySelector('h1')

var state = 'black';

function change() {
  circle.classList.add(`mode${state}`); //animation
  body.classList.add(`${state}`);
}

btn.addEventListener('click',()=>{
  circle.classList.remove(`mode${state}`); 
  //removing class is imp
  
  h1.style.color = `${state}`;
  btn.style.backgroundColor = `${state}`
  // everything depends on state variable 
  
  body.classList.remove(`${state}`);
  
  state = state === 'black' ? 'white' : 'black';
  txt = state === 'black' ? 'YOU' : 'DUMB';
  
  h1.innerText = txt;
  //this called ternary operator (shortcut instead using if and else )
  
  circle.style.backgroundColor = `${state}`
  change();
})
