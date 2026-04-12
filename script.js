const character = document.getElementById("character");
const cont = document.querySelector(".cont");
const reward = document.getElementById('reward');

let isDragging = false;

character.addEventListener("pointerdown", () => {
  isDragging = true;
});

document.addEventListener("pointerup", () => {
  isDragging = false;
});

document.addEventListener("pointermove", (e) => {
  if (isDragging) {
    const rect = cont.getBoundingClientRect();
    
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    const maxX = rect.width - character.offsetWidth;
    const maxY = rect.height - character.offsetHeight;
    
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;
    
    if (x == maxX && y == maxY) {
     const text = document.querySelector('h2'); 
      text.innerText = 'YOU WON';
      setTimeout(()=>{
    character.style.left = 0 +"px";
    character.style.top = 0 + "px";
    text.innerText = '';
      },2000)
    }
    character.style.left = x + "px";
    character.style.top = y + "px";
    
  }
});