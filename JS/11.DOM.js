console.log('10//JS');
// This file is about Document Object Model.
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. ... The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
let a = document;
console.log(a);
// Gives the whole html code in object form.

let a0 = document.all;
console.log(a0);
// Gives a list of everything in a html code in object form.

a1 = document.body;
console.log(a1)
// Does the same, but only with body.

a2 = document.forms;
a3 = document.forms[0];
console.log(a2, a3);
// a3 is for printing the first form in code(if there are many).

Array.from(a2).forEach(function (element, index) {
    console.log(element);
})
// Since a2 is an object, so we cnvrted it to an one element array by from(a2).

a4 = document.links;
a5 = document.links[0];
a6 = document.links[0].href;
console.log(a4);
console.log(a5);
console.log(a6);
// a4 makes an object for links.
// a5 does this work particularly.
// a6 prints the link.

a7 = document.images;
a8 = document.images[0];
console.log(a7);
console.log(a8);

a9 = document.scripts
a10 = document.scripts[0];
console.log(a9);
console.log(a10);