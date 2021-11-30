console.log('15//JS');
// This file is about creating, removing and replacing elements.

// CREATING--
let element_x = document.createElement('li');
// Creates an empty list element.

// APPENDING--
// let text = document.createTextNode("I'm a created Text Node.")
// element_x.appendChild(text);
// Now the element_x has a text which we just created with ".createTexrNode".

// SETTING CLASS, ID--
// Now, if we want to set element_x's class, id or any attribute we would do this:-
element_x.className = ("createdClass");
element_x.id = ("createdId");
// element_x.innerText = "Hello this is a created line";

element_x.innerHTML = "<b>Hello this is a created line</b>";
console.log(element_x)

// LOCATING--
// We have created the list element but still since we haven't given it a location in html page, it won't appear on it.
// SO----
let ul_x = document.querySelector("ul#ulId");
ul_x.appendChild(element_x);
console.log(ul_x);
console.log(element_x);

// REPLACING--

let element_x_2 = document.createElement("h3");
element_x_2.id = "createdId_2";
element_x_2.className = "createdClass_2";

let node_x = document.createTextNode("Hello this is a created node");
console.log(node_x);
element_x_2.appendChild(node_x);
element_x.replaceWith(element_x_2);
// Note: this property will have location of element as we haven't given element_x_2 its own location, but it is no longer a list element(as you see in page), because we only did append element_x as a 'child' of ul, not as a list element_x.
// Actually, it changes the value only for body, not for console.
console.log(element_x);
console.log(element_x_2);
// You can see they still haven't changed their base value.

ul_x.replaceChild(element_x, document.getElementById("liId1"));
// Now, the content of element_x has been copied to first <li>.

// REMOVING--

ul_x.removeChild(document.getElementById("liId5"));
// Removes the element with class "liId5".

// ATTRIBUTES:
// 1: Printing-
let x0 = document.querySelector("#liId2");
console.log(x0.getAttribute('id'));
// can get you argument of any attribute.
// gives 'null' if attribute doesn't exists.

// 2: Checking(existence)-
console.log(x0.hasAttribute('href'));
// gives answer in form of true or false.

// 3: Removing-
x0.removeAttribute('id');
console.log(x0);
// Id attribute gets vanished.

// 4: Setting-
// x0.setAttribute("id","liId2")
// console.log(x0);