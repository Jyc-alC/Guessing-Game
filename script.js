var secretNumber = 4;
var userGuess = Number(prompt("Guess a number!"));
alert("You have guessed "+userGuess);
if (userGuess === secretNumber) {
    alert("Correct!");
} else if (userGuess > secretNumber) {
    alert("Too high, try again!");
} else {
    alert("Too low, try again!");
}