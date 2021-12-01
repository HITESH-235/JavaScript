console.log('14//JS');
// This file is about tranversal properties & methods.

let x = document.querySelector(".container");
console.log(x.childNodes);
// You already know what it is, but the point here is--
// When you check the different parts of x in console,--
// You will find there are different kind of things are stored in the new object.
// Even there's a part for written comments in the object.
// And everything found on every line.
// So we can say it has a section for everything in code.
// Now,, if we use this--
console.log(x.children);
// It has only one difference that it stores only one place for any tag only, no matter what class or id.

let x0 = x.childNodes[1];
console.log("Childnode no.1:", x0);
let x1 = x.childNodes[1].nodeName;
console.log("Childnode's name no.1:", x1)

let obj = {
          "Element": 1,
          "Attribute": 2,
          "Text Node": 3,
          "Comment": 8,
          "Document": 9,
          "Doctype": 10,
}
console.log("These are the values' meaning printed by nodeType:");
console.table(obj)
let x2 = x.childNodes["childnode's type no.1", 1].nodeType;
console.log(x2);
// The number given output here tells us the type of childNode it is.
// For example, if it is a text node, then the number '3' will be output.

let x3 = document.querySelector("div.container");
console.log("By absolute way:", x3.children[7].children[0].children[0]);
// Will go directly for 0th position list from ul.

// Now, if we wanna choose the first element out of the set,---
console.log("If you just want first:", x3.children[7].children[0].firstElementChild);
console.log("If you wanna know type of the childnode", x3.children[7].children[0].firstChild);
// For some reasons, above line gives the first childNode as "text" instead of "Element".

// Same Rule for these lines are applied:
console.log("Opposite of firstElementChild", x3.children[7].children[0].lastElementChild);
console.log(x3.children[7].children[0].lastChild);

console.log("No. of elements(children) in div.container: " + x3.childElementCount);
// The childElementCount property returns the number of child elements an element has. Note: The returned value contains the number of child element nodes, not the number of all child nodes (like text and comment nodes). This property is read-only.

console.log("Parent Node of h1#h1:", x3.firstElementChild.nextElementSibling.parentNode);
console.log("Next sibling(CHILDREN) of h1#h1:", x3.firstElementChild.nextElementSibling);
console.log("Next sibling(CHILDNODE) of h1#h1:", x3.firstElementChild.nextSibling);
console.log("3rd sibling of h1#h1:", x3.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
