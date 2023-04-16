// Recursion is a function that calls itself.

// Example:
// to print the hello message for 3 times

// function printHello() {
//     console.log('hello');
//     printHello();
// }

// // for (let count = 1; count <= 3; count++){
// //     printHello();
// // }

// printHello();


// function printHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     printHello(times-1);
// }

// printHello(1);

/*

    printHello(3)
        - times: 3
        - console.log('hello')
        - printHello(2)
            - times: 2
            - console.log('hello')
            - printHello(1)
                - times: 1
                - console.log('hello')
                - printHello(0)
                    - times: 0
                    - if 0 == 0, true, return
    
*/

// function that prints the first N natural numbers

/*

    For example:

        If N = 5,
        Output: 
        1 2 3 4 5

        If N = 4,
        Output:
        1 2 3 4
*/

// function printNumbers(N) {
//     if (N == 0) return;

//     console.log(N);
//     printNumbers(N - 1);
// }

// printNumbers(5);

/*
    Recursion Tree

    printNumbers(5)
        - N = 5
        - 5 == 0, false, 
        - log(N)
        - printNumbers(4)
            - N = 4
            - 4 == 0, false
            - log(N)
            - printNumbers(3)
                - N = 3
                - 3 == 0, false
                - log(3)
                - printNumbers(2)
                    - N = 2
                    - 2 == 0, false
                    - log(2)
                    - printNumbers(1)
                        - N = 1
                        - 1 == 0, false
                        - log(1)
                        - printNumbers(0)
                            - N = 0
                            - 0 == 0, true, return
*/

// function printNumbers(N) {
//     if (N == 0) return;

//     printNumbers(N - 1);
//     console.log(N);
// }

// printNumbers(5);

/*
    printNumbers(5)
        - N = 5
        - 5 == 0, false
        - printNumbers(4)
            - N = 4
            - if 4 == 0, false
            - printNumbers(3)
                - N = 3
                - if 3 == 0, false
                - printNumbers(2)
                    - N = 2
                    - if 2 == 0, false
                    - printNumbers(1)
                        - N = 1
                        - if 1 == 0, false
                        - printNumbers(0)
                            - N = 0
                            - if 0 == 0, true, return
                        - log(N) [wte]
                    - log(N) [wte]
                - log(N) [wte]
            - log(N) [wte]
        - log(N) [wte]
    
    
    
    printNumbers(5)
*/

// function to print the sum of first N natural numbers

/*
    Recurrence Relation

    Given a recurrence relation = write a recursion function

    Recurrence Relation ?

    Input: 

    3

    Output:

    6

    Explanation:

    S(N) = S(3) = 1 + 2 + 3 = 6

    Input: 5

    Output: 15

    Explanation: S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Recurrence Relation ?
        Recurrence relation is a mathematical notation of a function which uses the same function

    Base Case:

    If N = 1, S(1) = 1
    

    If N = 2, S(2) = 1 + 2 = 3
    If N = 3, S(3) = 1 + 2 + 3 = 6
    If N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    If N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward Substitution

    If N = 1, S(1) = 1 Base Case

    If N = 2, S(2) = S(1) + 2 = 3
    If N = 3, S(3) = S(2) + 3 = 6
    If N = 4, S(4) = S(3) + 4 = 10
    If N = 5, S(5) = S(4) + 5 = 15

    Recurrence Relation:

    If N = 1, S(N) = 1
    If N > 1, S(N) = S(N-1) + N
*/

/*
    Recurrence Relation:
    
    If N = 1, S(N) = 1
    If N > 1, S(N) = S(N-1) + N
*/

// function S(N) {
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(10));

/*
    S(5)
        - N = 5, 5 == 1, false
        - return S(4) + 5
                  |
                  |__ N = 4, 4 == 1, false
                   __ return S(3) + 4
                              |
                              |__ N = 3, 3 == 1, false
                               __ return S(2) + 3
                                          |
                                          |__ N = 2, 2 == 1, false
                                           __ return S(1) + 2
                                                      |
                                                      |__ N = 1, 1 == 1, return 1
    
    
    console.log(15);                                       
                                                      
*/

// recursion function to find the factorial of a number

function F(N) {
    if (N == 0 || N == 1) return 1;
    return N * F(N - 1);
}

console.log(F(7));

/*
    F(N) = ?

    F(1) = 1
    F(2) = 2 * 1 = 2
    F(3) = 3 * 2 * 1 = 6
    F(4) = 4 * 3 * 2 * 1 = 24
    F(5) = 5 * 4 * 3 * 2 * 1 = 120

    F(1) = 1

    F(2) = 2 * F(1) = 2
    F(3) = 3 * F(2) = 6
    F(4) = 4 * F(3) = 24
    F(5) = 5 * F(4) = 120

    For N = 0, F(N) = 1
    For N = 1, F(N) = 1
    For all N>1, F(N) = N * F(N-1)

*/