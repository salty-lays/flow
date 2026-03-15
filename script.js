let image = document.getElementById("img");

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");

function chngeBg(selectedCard) {
  image.style.backgroundImage = `url(images/${selectedCard}.jpg)`;
  image.innerHTML = "";
  
}

card1.addEventListener("click", () => {
  chngeBg("1");
});

card2.addEventListener("click", () => {
  chngeBg("2");
});

card3.addEventListener("click", () => {
  chngeBg("3");
});

card4.addEventListener("click", () => {
  chngeBg("4");
});