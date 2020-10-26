'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
//sessionStorage.setItem("secretNumber", secretNumber);
//Number(localStorage.setItem("secretNumber",secretNumber));
sessionStorage.setItem("secretNumber",secretNumber);
let score = 2;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');


  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
	window.location.href = "gameover.html";
    //  displayMessage('You lost the game!');

      //document.querySelector('.score').textContent = 0;
    }
  }

});


