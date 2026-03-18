let compTxt = document.querySelector("#comp");
let compEmoji = document.querySelector(".computerContainer")
let winField = document.querySelector("#winField");
let youTxt = document.querySelector("#you");

function compChoice() {
 const arr = ["PAPER","SCISSOR", "ROCK"];
const choice = arr[Math.floor(Math.random() * arr.length)];
if (choice === "SCISSOR") {
  compEmoji.innerText = '✌️'
} else if (choice==="ROCK") {
  compEmoji.innerText ='✊'
}
else {
compEmoji.innerText='🖐️'}
return choice;
}

function analyzer(choice1, choice2){
  if (choice1 === choice2) {
    return "TIE"
  }
  else {
    if (choice1 === "SCISSOR") {
      if(choice2 === "ROCK"){
        return choice2
      }
      return choice1
    }
    else if (choice1 === "PAPER") {
      if(choice2 === "SCISSOR"){
        return choice2
      }
      return choice1
    }
    else if (choice1 === "ROCK") {
      if(choice2 === "PAPER"){
        return choice2
      }
      return choice1
    }
  }
}


function yourChoice(you) {
 let computer = compChoice();
 let winner = analyzer(you,computer);
 winField.style.marginLeft= "36vw";
 if (winner === you) {
   winField.innerText='YOU WON ❤️';
   winField.style.color="#07FE00"
   youTxt.innerText= you;
   compTxt.innerText= computer;
   return
 }
 else if(winner === 'TIE'){
   winField.innerText='GAME TIED';
   winField.style.color='white';
   youTxt.innerText= you;
   compTxt.innerText= computer;
 return
 }
 winField.innerText = 'YOU LOSE 😫'
 winField.style.color="#D36161";
youTxt.innerText = you;
compTxt.innerText = computer;
return;
}

