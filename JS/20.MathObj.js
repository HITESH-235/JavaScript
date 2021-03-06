console.log("20//JAVASCRIPT");
// This file is about maths objects in javascript.

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerText = '20//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>MATHEMATICAL OBJECTS</u>';
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "MATH OBJECTS";
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

console.log("ALL THE MATH OBJECTS IN JAVASCRIPT:-")
console.log(Math);
// Variables could be used too, like x = Math, then x.PI, x.E

console.log("SOME EXAMPLES OF THEM:-");
console.log("VALUE OF PIE =",Math.PI);
console.log("VALUE OF E =",Math.E)       
console.log("SQUARE ROOT OF 5 =",Math.sqrt(5));
console.log("4 RAISED TO THE POWER 5 =",Math.pow(4,5));
console.log("G.I.F. OF 5.67 =",Math.ceil(5.67));
console.log("INVERSE G.I.F. OF 5.67 =",Math.floor(5.67));
// WORKS THE SAME (YOU KNOW) FOR -VE NUMBERS.
console.log("LOG OF E RAISED TO THE POWER 2 =",Math.log(Math.E**2));
console.log("SIN 90 DEGREES = ",Math.sin(90*Math.PI/180));
// Math.sin takes value in radian, so multiply the degree value by that first.
console.log("SIN INVERSE 1/2 =",Math.round(Math.asin(1/2)*(180/Math.PI)),"degrees");
// Inverse of Sin, but output is in radian, so multiply it with that to convert to a degree.
// DO THAT WITH ANY TRIGONOMETRIC RATIO.
console.log("Sin 30 degrees =",(Math.sin(1020*Math.PI/180)).toFixed(1))
console.log("ABSOLUTE VALUE OF (-34) =",Math.abs(-34));
// WORKS LIKE MOD.
console.log("Smallest quantity in (1,2,3,4,-5,6,7,56,-45) =",Math.min(1,2,3,4,-5,6,7,56,-45));
console.log("Greatest quantity in (1,2,3,4,-5,6,7,56,-45) =",Math.max(1,2,3,4,-5,6,7,56,-45));
// PRINTING RANDOM NUMBERS:
console.log("RANDOM RATIONAL NUMBER BETWEEN 0 & 1 =",Math.random());
// Always gives random rational numbers between 0 & 1.
console.log("RANDOM RATIONAL NUMBER BETWEEN 0 & 100 =",Math.random()*100);
// Now you will get random rational number between 0 and 100.
console.log("RANDOM INTEGER BETWEEN 0 & 100 =",Math.round(Math.random()*100));
console.log("RANDOM INTEGER BETWEEN 40 & 90 =",Math.round(40+Math.random()*50));
// in above line, the first number in formula should be the lower limit of the required data.
// & second number in formula should be equal to (upper limit- lower limit).
// Here, [1st = 40] & [2nd = 90-40 = 50]
// NOW I EXPECT YOU CAN DO THIS FOR ANY RANGE.