const Word = require('./word.js');
const inquirer = require('inquirer');


let Letter = function()
{
    this.checkLetter = () =>
    {
        console.log("Working");
        
    }
    
}

let newLetter = new Letter();

newLetter.checkLetter();


module.exports = Letter;