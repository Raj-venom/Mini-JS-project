const input = document.querySelector("#input");
const prevGuess = document.querySelector("#prevGuess");
const randomNumber = Math.floor(Math.random() * 101);
var previousGuess = [];
var attempts = 10;

const result = document.querySelector("#result");

function check() {
  guess = parseInt(input.value);
  previousGuess.push(guess);
  prevGuess.innerHTML = `Previous Guess: [ ${previousGuess} ]`;

  attempts -= 1;
  console.log(attempts);
  console.log(guess, randomNumber);

  if (attempts >= 1 ) {
    if (randomNumber === guess) {
      console.log("ok");
      result.innerHTML = `You have Guessed ${randomNumber} Correctly`;
      document.querySelector("#submit").style.display = "none";
    } else {
      console.log("not ok");
      result.innerHTML = `Try Again`;
    }
  } else {
    result.innerHTML = `You have Failed to Guess ${randomNumber}`;
    document.querySelector("#submit").style.display = "none";

    console.log('else part')
  }

  document.querySelector("#remaining").innerHTML = attempts
  
}


function reset() {

location.reload(); //  reloads the current document.

}
