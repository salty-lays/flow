let container = document.querySelector('.container');

function startRain() {
  for (let i = 1;i <= 800;i++){
    setTimeout(() =>{
    const newDrop = document.createElement('div');
    newDrop.classList.add('droplet')
    newDrop.innerText = i;
    container.appendChild(newDrop);
  }, i * 200)
  }
}
