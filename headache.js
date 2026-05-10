export function decode() {
  const codeBox = document.getElementById('b64');
  const code = codeBox.innerText;
  
  codeBox.innerText = atob(code);
  codeBox.classList.add("decoded");

  return "decoded";
}

export function command(input) {
  const actions = {
    decode
  };
  
  const clean = input
    .replace(/<.*?>/g, "") // removes <script> etc
    .trim();
  
  const cmd = clean.replace("()", "");
  
  return actions[cmd]?.();
}