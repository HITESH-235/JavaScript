console.log('10//JS');

let a = window;
console.log(a);
// You can check for different properties(function)(although it is not for this)
// We will be writing different properties of windows
// they are written like this window.anyproperty;
// but it is inbuilt, so we can directly write "anyproperty".

// Alert statement
// alert("Hi, this is Hitesh!");

// Prompt is also like alert, but it will give a box to write and stores it in variable a.
// a0 = prompt("This will destroy your computer.");
// console.log(a0);

// a2 = confirm("Are you sure?");
// console.log(a1);
// Assigns a boolean value on ok/cancel.

// a = window.innerHeight;
// OR 
a3 = innerHeight;
a4 = innerWidth;
console.log(a3, a4);
// These properties tells the height/width of the page
// These value gets changed when we change the screen size(just refresh the page)
// outerHeight/outerWidth works the same

a5 = scrollX;
a6 = scrollY;
console.log(a5, a6);

a7 = location;
console.log(a7)
// a8 = location.reload();
// console.log.length(a8)
// Since this is our own page, so we should not write the code to reload, or it would do it infinite times.
a9 = location.href;
console.log(a9)
// Gives the link of current page.
// location.href = "https://codon-stream.w3spaces.com"
// Opens this link
a11 = location.toString();
console.log(a11)
// Gives link in string form.
a12 = history;
a13 = history.length;
a14 = history.go(-1)
console.log(a12, a13, a14)
// Gives some info of history
// try history property writing another page's console
// Length of histroy tells how many pages we opened
// history.go() works like the nav arrows given on top left of chrome page.
// go(-1) will take 1 step back, go(1) will take one step ahead. 
