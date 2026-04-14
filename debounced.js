export function debounce(fn, delay) {
  let timer;
  
  return function(...args) {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
//function waits for given delay before running the anything further kaam (work)