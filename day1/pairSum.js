const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

    // handling the input
    let numbers = userInput[0].split(' ').map(item => parseInt(item));
    let pairSum = parseInt(userInput[1]);

    // Task: find all the pairs whose sum is equal to pairSum

    // Algorithm: Brute Force O(n^2)

    // Generate all the pairs of the given array
    // for (let i = 0; i < numbers.length; i++){
    //     for (let j = i + 1; j < numbers.length; j++){
    //         // for every pair,
    //         // find the sum of the pair
    //         let sumOfPair = numbers[i] + numbers[j];
        
    //         // check if the sum of the pair is equal to the pairSum
    //         if (sumOfPair == pairSum) {
    //             // if true => print the pair
    //             console.log(`[${numbers[i]}, ${numbers[j]}]`);
    //         }
    //     }
    // }

    // Algorithm: Using Pointers O(n)

    // set the pointers
    // let left = 0;
    // let right = numbers.length - 1;

    // // while the pointers are not equal
    // while (left < right) {
    //     // check if the sum of the values pointed by the pointers
    //     // are equal
    //     if (numbers[left] + numbers[right] == pairSum) {
    //         // if true => print the pair
    //         console.log(`[${numbers[left]}, ${numbers[right]}]`);
    //         // move the pointers towards each other
    //         // increment left pointer
    //         // decrement the right pointer
    //         left++;
    //         right--;
    //     } else if(numbers[left] + numbers[right] > pairSum){
    //         // check if sumOfPair > pairSum
    //         // decrement the right pointer
    //         right--;
    //     } else if (numbers[left] + numbers[right] < pairSum) {
    //         // check if sumOfPair < pairSum
    //         // increment the left pointer
    //         left++;
    //     }
    // }
    
    // Algorithm - 3: Hashing

    // create a set to keep track of the seen values
    // let seen = new Set();

    // for (let value of numbers) {
    //     let difference = pairSum - value;
    //     if (seen.has(difference)) {
    //         console.log(`[${value}, ${difference}]`);
    //     } else {
    //         seen.add(value);
    //     }
    // }

    // let seen = new Set();
    let seen = [];

    for (let value of numbers) {
        let difference = pairSum - value;
        if (seen.includes(difference)) {
            console.log(`[${value}, ${difference}]`);
        } else {
            seen.push(value);
        }
    }
});