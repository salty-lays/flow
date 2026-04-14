import { debounce } from './debounced.js';
import { direct } from './direct.js'

const input = document.getElementById("search");
const input2 = document.getElementById('search2');
const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');

//just handles input of first (debouncing)
function handleTyped(e) {
  res1.innerText = e.target.value;
}

const debouncedSearch = 
debounce(handleTyped, 500);

input.addEventListener("input", debouncedSearch);

//this (below) handles second typed input (direct/non-debounced)
input2.addEventListener('input',()=>{
  direct(res2,input2.value)
})