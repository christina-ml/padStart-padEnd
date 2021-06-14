/*
Here are 5 examples that go through padStart and padEnd in JavaScript.
These work well with numbers. This is useful for filling extra space in
your strings.
*/
// padStart - Example #1

// create a variable: s, name it something that's 3 characters for now.
const s = 'dom';

/*
The first number 5, indicates how many characters in length.
The string "6" is what will be filled into the remaining space.
*/
const newStr = s.padStart(5, "6");

// see how it works in the console.
console.log(newStr);

/*
Expected output:
66dom
*/


// padStart - Example #2
// create a variable: s, name it something that's 1 character long.
const s = 'd';

/*
Same as previous example:
The first number 5, indicates how many characters in length.
The string "6" is what will be filled into the remaining space.
*/
const newStr = s.padStart(5, "6");
console.log(newStr);
/*
Expected output:
6666d
*/

// padEnd - Example #3

// same variables, the only difference is changing padStart to padEnd.
const s = 'd';
const newStr = s.padEnd(5, "6");
console.log(newStr);
/*
Expected output:
d6666
*/


// padStart - Example #4

const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

numbers.forEach((n) => {
  // padStart says the numbers will be 2 characters in length, and then fill the remaining space with the string "0".
  console.log(n.toString().padStart(2, "0"));
});
/*
The string "0" was added to all the numbers less than 1 character,
to make it 2 characters in length. Since this is padStart, the "0" goes at the beginning.
Expected output:
05
06
07
08
09
10
11
12
13
14
*/


// padEnd - Example #5
const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

numbers.forEach((n) => {
// padEnd says the numbers will be 2 characters in length, and then fill the remaining space with the string "0".
  console.log(n.toString().padEnd(2, "0"));
});
/*
The string "0" was added to all the numbers less than 1 character,
to make it 2 characters in length. Since this is padEnd, the "0" goes at the end.
Expected output:
50
60
70
80
90
10
11
12
13
14
*/
