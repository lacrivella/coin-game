import flipCoin from './flip-coin.js';


// reference DOM elements needed
const flipButton = document.getElementById('flip-it');
const headChoice = document.getElementById('head-choice');
const coinImage = document.getElementById('coin-image');

//initialize things?

//add event listeners
flipButton.addEventListener('click', () => {
    const randomNum = Math.random();
    const flip = flipCoin(randomNum);
    
    let guess = '';

    if(headChoice.checked) {
        guess = 'head';
    }
    else {
      guess = 'tails';  
    }

   if(flip === guess) {
       console.log('winner winner chicken dinner!');
   }
   else {
       console.log('you lose. sucks to suck');
   }
});