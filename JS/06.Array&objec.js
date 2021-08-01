console.log('06//JS');
// This file is about arrays and objects.

// Different kinds of Arrays
const marks = [23, 352, 264, 23, 867, 36, 84, 94, 39, 905];
const mixed = [23, 'sfsf', 75, 'dgf', 855, '435'];
const fruits = ['mango', 'banana', 'apple', 'grapes', 'guava'];
const arrInArr = [[2, 'ds'], 23, 'wsf', 23];
console.log('marks', marks);
console.log('mixed', mixed);
console.log('fruits', fruits);
console.log("Array In Array", arrInArr);

// Array Constructer
const arr0 = new Array(11, "will be changed");
// Rules for this constructor are -
// 1.if we write one integer(say 11) in array constructer, then it will create an array with 11 slots(empty).
// 2.so we have to use large brackets if we want to actually only create an array with only one integer(like 11), syntax = Array[11].

// This is how we can change/add an element in an existing array.
arr0[0] = 12;
arr0[1] = "random";
console.log(arr0);

// prints the particular position element.
console.log(arr0[1]);

// Tells the length of an array.
console.log('The total length of the marks array is ' + marks.length);

// This functions checks if "marks" is an array or not.
console.log(Array.isArray(marks));
console.log(Array.isArray("erhg"));
// Since "erhg" is not an array, so false.

let x0 = marks.indexOf(867);
console.log(x0);

fruits.push("New_Element");
console.log(fruits.slice(-1));
// push method append a new element to the last of an array.
// Since "charAT" function cannot print the last element with "-1".
// So we used the other trick of "slice" which is able to take "-1".

x1 = fruits.shift();
console.log(x1);
// shift method removes the first element and stores(if variable used) / prints(if directly written).
// So now we will find first element removed from the array.

fruits.unshift("mango");
console.log(fruits);
// Similarly "unshift" function can create a new element at the very 1st position of array.

x2 = mixed.pop();
console.log(x2 + " has been removed from ", mixed);

const dummy = [12, 445, 1326, 24, 57, "jyrdser", "fsg", 234];
// dummy.reverse();
console.log("Reversed Array", dummy.reverse());
dummy.splice(3, 4);
// In simple words,, splice = slice + pop.
console.log(dummy);

// Remember these functions are changing the actual array

let y0 = [1, 2, 3];
let y1 = ["one", "two", "three"];
y0 = y0.concat(y1);
console.log(y0);
// Note : this particular function when used on arrays, would not change y0 & y1, so we tricked it's disability and assigned them to y0 itself,  XD.

let obj0 = {
    first_name: "Hitesh",
    website: "codon-Stream",
    status: "active",
    existence: true,
    P_C_M: [97, 96, 99]
};
// Objects are nothing but dictionaries of JS.
// They can store keys of any data type.

console.table(obj0);
// Here we wrote it in tabular form(we can use log too).

console.log(obj0.first_name)
// Writing the key, prints value.
// OR ----
console.log(obj0["first_name"])
// We can use this method to do the same.

console.log(obj0.P_C_M)
