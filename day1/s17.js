// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findCount(words, string) {
    let count = 0;

    for (let word of words) {
        if (word == string) {
            count++;
        }
    }

    return count;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let sentence = userInput[0];
    let string = userInput[1];

    let words = sentence.split(' ');
    let count = findCount(words, string);

    if (count == 0) {
        console.log(-1);
    } else {
        console.log(count);
    }

  //end-here
});