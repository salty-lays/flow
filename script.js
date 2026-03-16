let button = document.querySelector("button");

let clicks = 0;
let e = clicks;
let w = e;
let q = w;
let h = q;
let j = 18;
let k = j;


function add() {
  clicks = clicks + 1;
  h = clicks;
  console.log(clicks);
  
  if (clicks === 100000) {
    let anchor = document.querySelector("#anchor");
    anchor.style.display = "flex";
  }
}

button.addEventListener("click", add);
