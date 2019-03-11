
let min = 1,
  max = 10,
  winningNum = getRandomNum( min, max ),
  guessesLeft = 3;

const game = document.querySelector( '#game' ),
  minNum = document.querySelector( '.min-num' ),
  maxNum = document.querySelector( '.max-num' ),
  guessBtn = document.querySelector( '#guess-btn' ),
  guessInput = document.querySelector( '#guess-input' ),
  message = document.querySelector( '.message' );


minNum.textContent = min;
maxNum.textContent = max;



function gameOver( color, msg ) {
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  sendMessage( msg, color );
}

// Listen for guess event
guessBtn.addEventListener( 'click', function( e ){

  let guess = parseInt( guessInput.value );

  if( isNaN( guess ) || guess < min || guess > max ){

    sendMessage( `Please enter number between ${min} and ${max}`, 'red' );

  } else if( guess === winningNum ){

    gameOver( 'green',`${winningNum} is correct` );
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';


  } else {

    guessesLeft -= 1;

    if( guessesLeft === 0 ){
      // Game Over
      gameOver( 'red', `Game Over. You lost.  Correct answer was ${winningNum}` );

    } else {
      // Game Continue
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      guessBtn.value = 'Try Again';
      guessBtn.style.background = 'green';
      sendMessage( `${guess} is wrong. You have ${guessesLeft} guesses left`, 'red');

    }

  }

  e.preventDefault();

});

function sendMessage( msg, color ) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum( min, max ){

  return Math.floor( Math.random()*( max - min +1 ) + min );

}

