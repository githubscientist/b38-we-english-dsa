let fruits = ['apple', 'orange', 'banana', 'grapes', 'watermelon'];

// for (let index = 0; index < fruits.length; index++){
//     console.log(fruits[index]);
// }

// // for...of loop
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // for...in loop
// for (let index in fruits) {
//     console.log(fruits[index]);
// }

// // while loop
// let index = 0; 
// while (index < fruits.length){
//     console.log(fruits[index]);
//     index++;
// }

// // for loop
// let index = 0; 
// for (; index < fruits.length ; ){
//     console.log(fruits[index]);
//     index++;
// }

// while loop
// let index = 0; 
// do {
//     console.log(fruits[index]);
//     index++;
// } while (index < fruits.length);

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});