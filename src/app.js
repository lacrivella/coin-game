import flipCoin from './flip-coin.js';


// reference DOM elements needed
const flipButton = document.getElementById('flip-it');
const headChoice = document.getElementById('head-choice');
const coinImage = document.getElementById('coin-image');
const winResults = document.getElementById('wins');
const lossResult = document.getElementById('loss');
const message = document.getElementById('message');
const moneyAmount = document.getElementById('money');
const betAmount = document.getElementById('bet-amount');

//initialize things?
let wins = 0;
let loss = 0;
let money = 1000;

//add event listeners
flipButton.addEventListener('click', () => {
    const randomNum = Math.random();
    const flip = flipCoin(randomNum);
    const betValue = parseInt(betAmount.value, 10);

    //trying to make image flip
    const imageSource = 'assets/' + flip + '.jpg';
    coinImage.src = imageSource;

    let guess = '';
    if(headChoice.checked) {
        guess = 'heads';
    }
    else {
        guess = 'tails';  
    }
    if(flip === guess) {
        message.textContent = 'Winner Winner!';
        wins++;
        winResults.textContent = 'Wins: ' + wins;
        money += betValue;
    }
    else {
        message.textContent = 'Nope, nope, nope.';
        loss++;
        lossResult.textContent = 'Losses: ' + loss;
        money -= betValue;
    }
    moneyAmount.textContent = 'Money: $' + money;
});
