// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
    }

    // push a data to the stack
    push(data) {
        this.items.push(data);
    }

    // remove an item from the stack
    pop() {
        this.items.pop();
    }

    // tos
    // return the topmost element in the stack
    tos() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1];
        }
    }

    // to check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let url = userInput[0];
    let components = url.split('/');

    let stack = new Stack();

    for (let component of components) {
        stack.push(component);
    }

    console.log('/' + stack.tos());

  //end-here
});