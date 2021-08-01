console.log('03//JS');
// This file is just for telling datatypes in JS
var name0 = "Abhishek";
console.log("My name is " + name0);
// "+" sign makes the whole line one string
arr1 = [12];
// you can add a "const" to fix it's value
num0 = 213;
console.log("Data type is " + typeof arr1);
console.log("Data type is " + typeof num0);

// Note: JS has no datatype of int, str, or float, has only 'number'

// Literals
// literal are another object like arrays
// they are the dictionary object of JS
STmarks = {
    hitesh: 100,
    dummy1: 87,
    dummy2: 46
};
console.log(STmarks, "type " + (typeof STmarks));

function dummyfunc() { };
console.log(typeof dummyfunc);

let datevar = new Date();
console.log(datevar, (typeof datevar))