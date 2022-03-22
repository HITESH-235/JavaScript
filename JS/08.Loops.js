console.log('08//JS');
// This file is about loops (for, while, do while).

// First we need to know how to add "1" to an integer.
let x = 34;
x += 1;
// Method 1
x++;
// Method 2
console.log(x);
console.log(34 + 2);
// Method 3

console.log('FOR LOOP');
for (let i = 0; i < 5; i++) {
          console.log(`Number ${i}`);
};

console.log("WHILE LOOP");
let i0 = 25;
while (i0 > 20) {
          console.log(`Number ${i0}`);
          i0 -= 1;
};
// You can print the opposite of this in the same way.
// I wrote it opposite just for instance

console.log("DO-WHILE LOOP");
let i1 = 77;
do {
          console.log(`Number ${i1}`);
          i1 -= 1;
} while (i1 > 72);
// The main difference between a while loop and do while loop is that while loop check condition before iteration of the loop. On the other hand, the do-while loop verifies the condition after the execution of the statements inside the loop.

// Using arrays with for loop
// Method 1- using "forEach"
console.log("Using Arrays")
let arr = [63, 436346, 1235, 235, 325];
arr.forEach(function (element, index, array) {
          console.log(element, index, array);
});
// you can skip writing index and array from both lines in above code
// Method 2-using the conventional code
console.log("Using Arrays//2")
for (let i = 0; i < arr.length; i++) {
          const x = arr[i]
          console.log(`Number ${i + 1} position has "${x}" as element.`);
};

console.log("Using Objects")
let obj = {
          name: "Hitesh",
          age: 14,
          type: "rookie programmer",
          origin: "Earth",
};
for (let key in obj) {
          console.log(`The ${key} of object is ${obj[key]}.`)
}