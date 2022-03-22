console.log('05//JS');
// This file is about strings in JS.

// Since we know '+' is used for concatenation.
var x0 = 'this ';
x0 = x0.concat('is ', 'a ', 'dummy');
console.log(x0);
// this 'concate' can add a string in the old string value.

console.log('There are ' + x0.length + ' characters in the string "x0"');
//  func for counting length of a String, array etc.

var x1 = "This IS a RegUlaR wRitten stRing";
console.log(x1.toLowerCase());
console.log(x1.toUpperCase());
// function for capital and small string.

let x2 = "This is another regular sentence";
console.log(x2[1]);
// Prints character at position '1'.
console.log("`s` letter first appeard at " + x2.indexOf('s'));
// Prints at which pos did the character was written the first time.
// Gives '-1' if character not found.

console.log("`s` letter last appeard at " + x2.lastIndexOf('s'));
// Gives '-1' if character not found.

console.log("At position no.22, we have " + x2.charAt(22));
// Prints which character is at position 22.
// Note : entering -1 won't work here.

console.log("endsWith", x2.endsWith("ence"));
// Prints whether ends with this character(s) or Notification, in boolean form.

console.log('includes', x2.includes('nother'));
// Prints if given word of characters exist or not.

console.log('substring "' + x2.substring(5,15) + '"');
// Try writing (i) single number, (ii) -1(null effect), (iii) -3(null effect).

console.log('slice "' + x2.slice(5,15) + '"');
// slice is same as substring, but :-
// try writing (i) single number, (ii) -1, (iii) (5, -15), (iv) -20.

console.log(x2.split(" "));
// splits and make words at every " "(space) & stores into array.

console.log(x2.replace("This", "That"));
// Prints normal x2 if replacing element not found.
// replaces with second element in the brackets.

let x3 = "Hitesh";
let x4 = "Sinha";
let x5 = "IX 'B'"
let x6 = `<h1>JAVASCRIPT</h1>
            <p>Ctrl + Shift + i to inspect to console</p>
            Name  - ${x3} ${x4}<br>
            Class - ${x5}`;
document.body.innerHTML = x6;

// This is how we can use variable names in between of string/
// Note : these are written inside ` `(backtics), not that ' '(quotes).
// document.body.innerHTML -this will be studied later.
