import { getAnswer } from './checker.js';

let body = document.querySelector('body');
let btn = document.querySelector('button');
let ans = document.querySelector('.ans');
let quest = document.getElementById('question');
let hints = ["how are you", "love", "time", "date",'day','age','name'];
let hintIndex = 0;


btn.addEventListener('click',()=>{
  var asked = quest.value.toLowerCase().trim();
  clearInterval(hintInterval);
  if (!asked) {
    quest.placeholder = "Please type something!";
    return;
  }
  ans.innerText = getAnswer(asked);
})

function showHints() {
  quest.placeholder = "Try asking: " + hints[hintIndex];
  hintIndex = (hintIndex + 1) % hints.length;
}
let hintInterval = setInterval(showHints, 1200);
