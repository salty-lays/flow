let container = document.querySelector(".container");
let btn = document.getElementById("add");
let count = 1;
const colors = ["red", "blue", "green", "yellow", "purple", "orange",'pink','white','lime','hotpink'];

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

btn.addEventListener("click",()=>{
  const newBlock = document.createElement("div");
  newBlock.classList.add('block');
  newBlock.style.backgroundColor = getRandomColor();
  newBlock.textContent = count;
  container.appendChild(newBlock);
  count++;
})

