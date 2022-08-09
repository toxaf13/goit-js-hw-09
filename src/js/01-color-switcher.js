const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timer = null;

function getRandomHexColor() {
  const randomColor= `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};


btnStart.addEventListener('click',() => {
   btnStart.disabled = true;
   btnStop.disabled = false;
   timer = setInterval(()=>{
      body.style.backgroundColor = `${getRandomHexColor()}`;
   },1000)
});

btnStop.addEventListener('click', () => {
   btnStart.disabled = false;
   btnStop.disabled = true;
   clearInterval(timer);
 });
 
