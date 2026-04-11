let body = document.querySelector('body');


export function getAnswer(input)
{
  let asked = input.toLowerCase().trim();
  if (asked.includes('love')) {
    return 'Did you said love 🥰'
  }
  else if (asked.includes('name')) {
    return 'yo im program'
  }
  else if (asked.includes('age')) {
    return 'Idk fr'
  }
  else if (asked.includes('day')) {
    let now = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[now.getDay()];
  }
  else if (asked.includes('date')) {
    let date = new Date()
    return date.toLocaleDateString();
  }
  else if (asked.includes('time')) {
    return 'Good '+getTimeOfDay()
  }
  else if (asked.includes('how are you')) {
    return 'Im fine, how can i help you?'
  }
  else {
    return 'Sorry dont ask anything 😭'
  }
}



function getTimeOfDay() {
  let hour = new Date().getHours();

  switch (true) {
    case hour >= 5 && hour < 12:
      body.style.backgroundColor = '#EBB111';
      return "Morning 🌅";

    case hour >= 12 && hour < 17:
      body.style.backgroundColor = 'yellow'
      return "Afternoon ☀️";

    case hour >= 17 && hour < 21:
      body.style.backgroundColor = 'orange'
      return "Evening 🌇";

    case hour >= 21:
      body.style.backgroundColor = 'darkblue'
      return "Night 🌙";

    default:
    body.style.backgroundColor = 'black'
      return "Midnight 🌌";
  }
}
