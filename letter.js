const Word = require('./word.js');
const inquirer = require('inquirer');


const Letter = function(letter)
{
    this.letter = letter;
    this.display = this.guessed ? this.letter: '_';
    this.guessed = false;
    // this.checkLetter = () =>{
    //     var ifLetterExists = false;
    //     for (var i = 0; i < that.numBlanks; i++) {
    //         if (that.selectedWord[i] === this.letter) {
    //             ifLetterExists = true;
    //         }
    //     }
    //     //check where in the word the letter exist and populate blankandsuccessesarray
    //     if (ifLetterExists) {
    //         for (var i = 0; i < that.numBlanks; i++) {
    //             if (that.selectedWord[i] == letter) {
    //                 that.numBlanksAndSuccesses[i] = letter;
    //             }
    //         }
    //     }
    //     //letter wasn't found
    //     else {
    //         that.wrongLetters.push(letter);
    //         that.guessesLeft--;
    //         // alert(guessesLeft);
    //     }

    //     //testing and debugging

    //     console.log(that.numBlanksAndSuccesses);
    // }
}
    

// let newLetter = new Letter();

// newLetter.checkLetter();


module.exports = Letter;


//handle the guess
//toUpper case or toLowercase input

