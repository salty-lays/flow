import { command } from './headache.js';

const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const out = document.getElementById('output');

inp.addEventListener('input', () => {
  btn.disabled = inp.value.trim().length === 0;
});

btn.addEventListener('click', () => {
  const val = inp.value.trim();
  if (!val) return;
  
  const result = command(val);

  out.innerHTML = result ?? val;
});