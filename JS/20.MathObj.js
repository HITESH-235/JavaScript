console.log("20//JAVASCRIPT");
// This file is about maths objects in javascript.

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerText = '20//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>MATHEMATICAL OBJECTS</u>'
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "MATH OBJECTS"
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

let x = Math;
console.log("ALL THE MATH OBJECTS IN JAVASCRIPT:-")
console.log(x);

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
console.log("SIN INVERSE 1/2 =",Math.round(Math.asin(1/2)*(180/Math.PI)));
// Inverse of Sin, but output is in radian, so multiply it with that to convert to a degree.
// DO THAT WITH ANY TRIGONOMETRIC RATIO.
console.log("ABSOLUTE VALUE OF (-34) =",Math.abs(-34));
// WORKS LIKE MOD.
console.log("Smallest quantity in (1,2,3,4,-5,6,7,56,-45) =",Math.min(1,2,3,4,-5,6,7,56,-45));
console.log("Greatest quantity in (1,2,3,4,-5,6,7,56,-45) =",Math.max(1,2,3,4,-5,6,7,56,-45));
