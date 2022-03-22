console.log('14//JS');
// This file is about tranversal properties & methods.

let s = document.querySelector("h1#h1");
s.innerHTML = '14//JAVASCRIPT';

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
let x2 = x.childNodes[0].nodeType;
// since childnode[0] contains the text of h1, its a text and so will give "3"
console.log(x2);
// The number given output here tells us the type of childNode it is.
// For example, if it is a text node, then the number '3' will be output.

let x3 = document.querySelector("div.container");
console.log("By absolute way:", x3.children[7].children[0].childNodes[0]);
// Will go directly for 0th position list from ul.

// Now, if we wanna choose the first element out of the set,---
console.log("If you just want first:", x3.children[7].firstElementChild);
// firstElementChild gives children, not childnode, since it clearly writes "element"
console.log("If you wanna know type of the childnode", x3.children[7].firstChild);
// firstChild gives childnode, not children.

// Same Rule for these lines are applied respectively:
console.log("Opposite of firstElementChild", x3.children[7].lastElementChild);
console.log("Opposite of firstChild",x3.children[7].lastChild);

console.log("No. of elements(children) in div.container:" , x3.childElementCount);
// The childElementCount property returns the number of childrens it has. Note: The returned value contains the number of children, not the number of all child nodes (like text and comment nodes). This property is read-only.
console.log("Method 2:",x3.children.length)
// Again this counts number of children, not childnodes
console.log("No. of childNodes in div.container: ", x3.childNodes.length)
// This is the only method to count chidnodes.

console.log("Parent Node of h1#h1:", x3.firstElementChild.nextElementSibling.parentNode);
console.log("Next sibling(CHILDREN) of h1#h1:", x3.firstElementChild.nextElementSibling);
// This tells next children sibling.
console.log("Next sibling(CHILDNODE) of h1#h1:", x3.firstElementChild.nextSibling);
// This tells next child Node sibling.
console.log("3rd sibling of h1#h1:", x3.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
// First was h2, then hr, then it printed "div".(coz using it times 3)
