const james = document.getElementById("Alienjames");
const music = new Audio("zipzip.mp3");
james.addEventListener("click", () =>{
  const music = new Audio("zipzip.mp3");
music.loop = true;
music.play();
  moveRandom()
})

function moveRandom() {
  const maxX = window.innerWidth - james.offsetWidth;
  const maxY = window.innerHeight - james.offsetHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  james.style.left = randomX + "px";
  james.style.top = randomY + "px";
}
