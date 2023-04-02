// let string = 'apple';
// let string1 = "this is also a string";
// let string2 = `this is too a string
//     that spans multiple lines
//     called as template literals
// `;
// let string3 = new String('orange');

// console.log(string);
// console.log(string1);
// console.log(string2);
// console.log(string3);

// console.log(string[0], string.charAt(0), string.charCodeAt(0));

// difference: strings are immutable
// let string = 'apple';

// string[0] = 'k';

// console.log(string);

let string = 'apple';

for (let char of string) {
    console.log(char);
}