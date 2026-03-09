let lameMessage = document.getElementById("message");
let input = document.getElementById("anything");
let body = document.querySelector("body")

function changeBg() {
  let color = input.value;
  
  if (color) {
    body.style.backgroundColor = color;
    lameMessage.innerText = "wow :)";
  }
}
