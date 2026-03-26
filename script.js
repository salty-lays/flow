let gameContainer = document.querySelector('.gameContainer');
let button = document.querySelector('button');
let catched = document.querySelector('#catched');

function started() {
  button.style.display = 'none';
  
  let gooble = document.createElement('div');
  gooble.classList.add('fruitCake');
  gameContainer.appendChild(gooble);
  
  let goobleClicked = false;
  
  gooble.onclick = () => {
    goobleClicked = true;
    gooble.remove();
    catched.style.display = 'block';
  };
  
  function moveLoop() {
    
    while (!goobleClicked) {
      
      let x = Math.random() * (gameContainer.clientWidth - gooble.offsetWidth);
      let y = Math.random() * (gameContainer.clientHeight - gooble.offsetHeight);
      
      gooble.style.position = "absolute";
      gooble.style.left = x + "px";
      gooble.style.top = y + "px";
      break;
    }
    
    if (!goobleClicked) {
      setTimeout(moveLoop, 500);
    }
  }
  
  moveLoop();
}
