let heading = document.querySelector('h1');
let inputColor = document.getElementById('color');
let inputIndex = document.getElementById('index');
let text = heading.innerText;

heading.innerHTML = text
 .split("")
 .map(letter => `<span>${letter}</span>`)
 .join("");

const changeColor = () => {
 let color = inputColor.value;
 let index = Number(inputIndex.value) - 1;
 try {
  document.getElementById('error').innerText = ''
 let letters = heading.querySelectorAll("span");
 letters[index].style.color = color;
}
catch {
 document.getElementById('error').innerText = 'PLEASE enter Valid Values';
}
}
