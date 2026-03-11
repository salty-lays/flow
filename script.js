let body = document.querySelector("body");
let number = document.getElementById("number");
let hint = document.getElementById("hint");
let input = document.querySelector("#guesser");
let button = document.querySelector("button");


function guess(){
  let yourGuess = parseInt(input.value);
  if (yourGuess === 69) {
    hint.innerText = "Good gal";
    number.innerHTML ="🥰";
  }
  else if (yourGuess>69){
    number.innerHTML = yourGuess;
    hint.innerText = "lower number";
  } else {
    number.innerHTML = yourGuess;
    hint.innerText = "higher number";
  }
}
