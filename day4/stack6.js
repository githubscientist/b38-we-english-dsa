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

function trapWater(heights) {

    let stack = new Stack();
    let totalWater = 0;

    for (let i = 0; i < heights.length; i++){
        while (!stack.isEmpty() && heights[i] > heights[stack.tos()]) {
            // get the topbar index from the stack tos
            let topBarIndex = stack.pop();

            // check if the stack is empty
            // if true, break the loop
            if (stack.isEmpty()) {
                break;
            }

            // calculate the distance between the bars
            let distance = i - stack.tos() - 1;

            if (heights[i] >= heights[stack.tos()]) {
                continue;
            }

            // calculate the height difference
            let heightDifference = Math.min(heights[i], heights[stack.tos()]) - heights[topBarIndex];

            // find the water trapped
            let water = distance * heightDifference;

            // add the water to the totalWater
            totalWater += water;
        }
        stack.push(i);
    }

    return totalWater;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let bars = parseInt(userInput[0]);

    let heights = userInput[1].split(' ').map(item => parseInt(item));

    console.log(trapWater(heights));

  //end-here
});