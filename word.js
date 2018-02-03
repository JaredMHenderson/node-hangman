let words = ["mountain", "bicycle", "beer", "broncos", "rockies"]

let Word = function()
{
    this.chooseWord = () =>
    {
        let selectedWord = words[Math.floor(Math.random() * words.length)];
        let lettersInWord = selectedWord.split("");
        let numBlanks = lettersInWord.length;

        guessesLeft = [];
        wrongLetters = [];
        numBlanksAndSuccesses = [];
        guessesLeft = 10;

        // Populate numBlanksAndSuccesses with right number of blanks and successes
        for (var i = 0; i < numBlanks; i++) {
            numBlanksAndSuccesses.push("_");
        }
        // Test
        // console.log(selectedWord);
        // console.log(lettersInWord);
        // console.log(numBlanks);
        console.log(`Word to guess : ${numBlanksAndSuccesses.join(" ")}`);
        
        
    }
    
}

let newWord = new Word();

newWord.chooseWord();

module.exports = Word;