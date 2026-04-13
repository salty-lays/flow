const btn = document.querySelector('button');
const body = document.querySelector('body');

var state = 'black';

btn.addEventListener('click',()=>{
  
  state = state === 'black' ? 'white' : 'black';
  //This is ternary operator
  //Better than if, else if there are two conditions (here we've black and white)
  //so ? checks if its true then pass the value next to it if not true then pass after colon value
  body.style.backgroundColor = state
})
