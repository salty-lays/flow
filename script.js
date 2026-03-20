function startTroll() {
  document.getElementById("startBtn").style.display = "none";
  
  const screen = document.getElementById("screen");
  const bar = document.getElementById("progressBar");
  
  screen.style.display = "block";
  screen.classList.add("glitch");
  
  const messages = [
    "Initializing system breach...",
    "Bypassing firewall...",
    "Injecting payload...",
    "Accessing private files...",
    "Downloading data...",
    "Tracking IP address...",
    "Location found: Mumbai, India",
    "Sending data to server...",
    "Granting remote access...",
    "ERROR... ERROR...",
    "System override complete."
  ];
  
  let i = 0;
  let progress = 0;
  
  const textInterval = setInterval(() => {
    if (i < messages.length) {
      screen.innerText += messages[i] + "\n";
      i++;
    } else {
      clearInterval(textInterval);
      finalChaos();
    }
  }, 700);
  
  const progressInterval = setInterval(() => {
    progress += Math.random() * 10;
    bar.style.width = progress + "%";
    
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, 300);
  
  function finalChaos() {
    setInterval(() => {
      document.body.style.background =
        document.body.style.background === "black" ? "#100" : "black";
      
      screen.style.color =
        screen.style.color === "red" ? "#00ff9f" : "red";
      
      screen.innerText += "\n⚠️ SYSTEM COMPROMISED ⚠️";
    }, 200);
  }
}
