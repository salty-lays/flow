let hr = document.getElementById('hour');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function setTime(hrs,mins,secs){
  hr.innerText=`${hrs}`;
  min.innerText=`${mins}`;
  sec.innerText=`${secs}`;
  hours = hrs;
  minutes = mins;
  seconds = secs;
}

setInterval(() => {
  seconds++;
  
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  
  if (hours === 24) {
    hours = 0;
  }
  
  setTime(hours, minutes, seconds);
}, 1000);
