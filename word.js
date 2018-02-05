let Letter = require('./letter.js')



const Word = function()
{
    this.words = ["mountain", "bicycle", "beer", "broncos", "rockies"];
    this.selectedWord;
    this.lettersInWord;
    this.numBlanks;
    this.guessesLeft = [];
    this.wrongLetters = [];
    this.numBlanksAndSuccesses = [];
    this.guessesLeft = 10;
    this.chooseWord = () =>
    {
        this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.lettersInWord = this.selectedWord.split("");

        

        // Populate numBlanksAndSuccesses with right number of blanks and successes
        for (var i = 0; i < this.selectedWord.length; i++) {
            this.numBlanksAndSuccesses.push(new Letter(this.selectedWord[i]));
        }
        // Test
        // console.log(selectedWord);
        // console.log(lettersInWord);
        // console.log(numBlanks);
        console.log(`Word to guess : ${this.numBlanksAndSuccesses.forEach((letter) => letter.display + ' ')}`);
    }
    this.checkLetter = (guessedLetter) => {
        this.numBlanksAndSuccesses.forEach(letter => {
            if (letter.letter === guessedLetter)
            {
                letter.guessed = true;
            }
        });
    }
    
    
    
}

// 

module.exports = Word;