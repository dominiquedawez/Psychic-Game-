var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var lettersGuesses = [];
var guessesLeft = 6;


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
// console.log(computerGuess)





// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    //    console.log(userGuess)

    function reset() {
        guessesLeft = 6;
        guessesSoFarText = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        document.getElementById("resetbutton").onclick = reset;
        // I wasn't able to get the reset button to work or stop from disappearing after starting the game, but the game resets automatically when you lose
    }


    // if ((userGuess = letters)) {
    if (userGuess === computerGuess) {
        wins++;
        alert("You've guessed right. It was letter " + userGuess)
        reset();

    }

    else {
        guessesLeft--;
        lettersGuesses.push(userGuess);
    }
    if (guessesLeft === 0) {
        losses++;
        alert("Damn, you lost");
        reset();
    }
    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses So-Far: " + lettersGuesses + "</p>" +
        "<button> Reset </button>";


    document.querySelector("#game").innerHTML = html;
    console.log(html);






    // }

};




