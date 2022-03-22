console.log('13//JS');
// In this file we will learn about element selectors.


// Type:1:Single Element selectors.

// 1st: Id element selector :-
let x = document.getElementById("dummyid1");
// Prints whatever tag has this id(must be 1 and only).
console.log("Element with id 'dummyid1':", x);

// 1st:part2: modifying the Id selector
x = x.className;
// Prints the class of the element with id = "dummyid1".
// x has now been assigned to new x here.
console.log("class' name of element with id 'dummyid1':", x);

// 2nd: getting the child of an element :-
let x0 = document.getElementById("dummyid2");
x0 = x0.childNodes;
// Returns the child of a tag in form of an object.
// you can explore different properties on internet.
// And even check the various suggestions given by vs code.
console.log("Children of element with id 'dummyid2'", x0);

// 3rd: getting the parent of the element :-
let x1 = document.getElementById("dummychildid1");
x1 = x1.parentNode;
// Does the opposite of childnode
console.log(x1);

// 4th: doing css works with Id selector :-
// Now we will see some codes which works for html & css.
let x2 = document.getElementById("dummyid3");
x2.style.color = "red";
// Changes color of element of id 'dummyid3'.

// 4th: using html tags in js through Id selector :-
x2.innerText = "Hitesh is a Bad boy";
// The value inside element with id 'dummyid3' has now been changed to this.
x2.innerHTML = "<u>Hitesh is a Bad boy</u>";
// This property has the features same as above, but.....
// It has the ability to take input a code of html too.
// like here, we underlined the line by using <u> tag in Js.
// You can do this this too :
console.log(x2.style.color);
console.log(x2.innerText);
console.log(x2.innerHTML);

// 5th: Query selector :-
let x3 = document.querySelector('.dummyclass1');
// This property returns the whole element containing '.dummyclass1'.
// But return only one element(even if many exists)
console.log(x3);
let x4 = document.querySelector('div');
// This line is for showing that it can take a tag's name also for search but stille returns only the first.
console.log(x4);


// Type:2:Multiple Element selectors.

// 1st: class element selector :-
let x5 = document.getElementsByClassName('dummyclass1');
// This property prints all the elements with class 'dummyclass1'.
console.log(x5);
console.log(x5[1]);
// This way you can get a particular element of that class.

// 2nd: Tag element selector :-
let x6 = document.getElementsByTagName("div");
// This property prints all the elements of div tag.
console.log(x6);
console.log(x6[1]);
// same as above.

console.log("By Array :-")
// printing the set of element into a standard form by Array
Array.from(x6).forEach(function (element) {
          console.log(element);
          // element.style.color = "violet";
});

console.log("By For Loop :-")
// printing the set of element into a standard form by for loop.
for (let index = 0; index < x6.length; index++) {
          const element = x6[index];
          console.log(element);
}