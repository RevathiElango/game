//create secreteNumber
var secreteNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//Check if guess is right
if(guess === secreteNumber) {
	alert("You got it right!");
}
//check if guess is higher
else if(guess > secreteNumber){
	alert("Too high. Guess again!");
}
else{
	alert("Too low. Guess again!");
}
//otherwise. check if lower