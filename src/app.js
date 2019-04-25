import flipCoin from './flip-coin.js';


// reference DOM elements needed
const flipButton = document.getElementById('flip-it');
const headChoice = document.getElementById('head-choice');
const coinImage = document.getElementById('coin-image');
const winResults = document.getElementById('wins');
const lossResult = document.getElementById('loss');

//initialize things?

//add event listeners
flipButton.addEventListener('click', () => {
    const randomNum = Math.random();
    const flip = flipCoin(randomNum);

    //trying to make image flip
    const imageSource = 'assets/' + flip + '.jpg';
    coinImage.src = imageSource;

    let guess = '';
    if(headChoice.checked) {
        guess = 'head';
    }
    else {
        guess = 'tails';  
    }

    const Correct = flip === guess;

   if(flip === guess) {
       console.log('winner winner chicken dinner')
       wins++;
       winResults.textContent = 'Wins' + wins;
   }
   else {
       console.log('you lose. sucks to suck');
   }
});