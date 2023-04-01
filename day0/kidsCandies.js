/**
 * @param {number[]} candies
 * @param {number} totalCandies represents the current kid's candies at index i + extraCandies
 * @return {boolean} whether if the totalCandies is greater than all the other kid's candies
 */
// function isGreater(totalCandies, candies, i){
//     // let assume that initially the result is true
//     let result = true;

//     // traverse through all the candies index = 0 to candies.length-1, (candies[]),
//     for(let index=0; index<candies.length; index++){
//         // except for the index i
//         if(index!=i){
//             // for every candy => 
//             // check if the totalCandies is >= candies[index]
//             if(totalCandies >= candies[index]){
//                 // do nothing
//             } else{
//                 // else 
//                 // change our assumption for the result variable to false
//                 result = false;
//             }
//         }
//     }
    
//     // return the value of the boolean result variable
//     return result;
// }

// function isGreater(totalCandies, candies, i){
//     // let assume that initially the result is true
//     let result = true;

//     // traverse through all the candies index = 0 to candies.length-1, (candies[]),
//     for(let index=0; index<candies.length; index++){
//         // except for the index i
//         // for every candy => 
//         // check if the totalCandies is >= candies[index]
//         if(totalCandies < candies[index]){
//             // change our assumption for the result variable to false
//             result = false;
//         }
//     }
    
//     // return the value of the boolean result variable
//     return result;
// }

// function isGreater(totalCandies, candies, length){
//     // let assume that initially the result is true
//     let result = true;

//     // traverse through all the candies index = 0 to candies.length-1, (candies[]),
//     for(let index=0; index<length; index++){
//         // except for the index i
//         // for every candy => 
//         // check if the totalCandies is >= candies[index]
//         if(totalCandies < candies[index]){
//             // change our assumption for the result variable to false
//             result = false;
//             break;
//         }
//     }
    
//     // return the value of the boolean result variable
//     return result;
// }

// function isGreater(totalCandies, candies){
//     for(let candy of candies){
//         if(totalCandies < candy){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an empty boolean array -> result, length = candies.length
//     let result = [];
//     let length = candies.length;

//     // traverse through the candies array i = 0 -> candies.length-1
//     for(let i=0; i<length; i++){
//         // for every candy i,
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check whether the totalCandies is >= all the other candies
//         if(isGreater(totalCandies, candies)){
//             // if true -> push the boolean result true into the result array
//             result.push(true);
//         } else{
//             // else -> push the false into the result array
//             result.push(false);
//         }
//     }

//     // return the boolean result array
//     return result;
// };

// function findGreatest(candies, length){
//     let greatest = candies[0];

//     for(let candy of candies){
//         if(candy>greatest){
//             greatest = candy;
//         }
//     }
//     return greatest;
// }

// function findGreatest(candies, length){
//     let greatest = candies[0];

//     for(let index=1; index<length; index++){
//         if(candies[index]>greatest){
//             greatest = candies[index];
//         }
//     }
//     return greatest;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let length = candies.length;

//     // let greatest = findGreatest(candies, length);
//     let greatest = Math.max(...candies);

//     for(let i=0; i<length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies>=greatest){
//             result.push(true);
//         } else{
//             result.push(false);
//         }
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatest = Math.max(...candies);

//     for(let candy of candies){
//         if(candy + extraCandies>=greatest){
//             result.push(true);
//         } else{
//             result.push(false);
//         }
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatest = Math.max(...candies);

//     for(let candy of candies){
//         result.push(candy + extraCandies>=greatest);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatest = Math.max(...candies);

//     // for(let candy of candies){
//     //     result.push(candy + extraCandies>=greatest);
//     // }
//     // return result;
//     return candies.map((candy) => {
//         return candy + extraCandies>=greatest;
//     });
// };


// var kidsWithCandies = function(candies, extraCandies) {
//     let greatest = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies>=greatest);
// };



// var kidsWithCandies = function(candies, extraCandies) {
//     let g = Math.max(...candies);
//     return candies.map(c => c + extraCandies>=g);
// };

var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies>=Math.max(...candies));
};


/*
    Algorithm-1:

    // create an empty boolean array -> result, length = candies.length
    
    // traverse through the candies array i = 0 -> candies.length-1

        // for every candy i,
        // find the totalCandies = candies[i] + extraCandies

        // check whether the totalCandies is >= all the other candies
        // if true -> push the boolean result true into the result array
        // else -> push the false into the result array

    // return the boolean result array
*/