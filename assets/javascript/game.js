// Hnagman database

// The object questions for hangman.
var trivia = [
  {//question[i].question
    question: "This superhero is always in a friendly neighborhood.",
    answer: "Spiderman"
  },
  {
    question: "This Canadian superhero is named after a ferocious animal.",
    answer: "Wolverine"
  },
  {
    question: "This superhero smash!",
    answer: "Hulk"
  },
  {
    question: "This superhero is an All-American.",
    answer: "Captain America"
  },
  {
    question: "This superhero is a nordic god.",
    answer: "Thor"
  }
];


//declare game variables
var input;

//This object has most of the definitions for the game
var hangman = {
  guessesLeft: 12,
  banner: "",
  question: "",
  answer: "",
  word: "",
  userGuess: "",
  wins: 0,

  getQuestion: function() {
    var index = Math.floor(Math.random() * trivia.length);
    console.log(index);
    console.log(trivia[index].question);
    console.log(trivia[index].answer);
    question = trivia[index].question;
    answer = trivia[index].answer;
    console.log(question);
    console.log(answer);
  },

  presentQuestion: function() {
    for(i = 0; i < answer.length; i++){
      word = word + "_ ";
    }
  },

};

//Initialize game
hangman.getQuestion();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  input = event.key;

  //game mechanics
  if(input != computerGuess){
    guessesLeft--;
    guesses = guesses + input + ", ";
    banner = "";
  }

  //loose mechanics
  if(guessesLeft == 0){
    losses++;
    banner = "AH AH AH You didn't say the magic word!"

    //Reset game
    guessesLeft = 9;
    guesses = "";
    computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
  }

  //win mechanics
  if(input == computerGuess){
    wins++;
    banner = "You win!"

    //Reset game
    guessesLeft = 9;
    guesses = "";
    computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
  }
};


// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
  "<p>Wins: " + hangman.wins + "</p>" +
  "<p>Q: " + hangman.question + "</p>" +
  "<p>" + hangman.word + "</p>" +
  "<p>Guesses Left: " + hangman.guessesLeft + "</p>" +
  "<p>Tried so far: " + hangman.userGuess + "</p>" +
  "<p><h2>" + hangman.banner + "</h2></p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;


  // console.log("Wins: " + wins);
  // document.getElementById("user-wins").innerHTML = wins;
  // console.log("html: " + hangman.question);
  // document.getElementById("question").innerHTML = hangman.question;
  // document.getElementById("word").innerHTML = hangman.word;
  // document.getElementById("user-guessesLeft").innerHTML = hangman.guessesLeft;
  // document.getElementById("user-guesses").innerHTML = hangman.userGuess;
  // document.getElementById("banner").innerHTML = hangman.banner;
