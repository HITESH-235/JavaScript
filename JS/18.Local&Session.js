console.log("18//JAVASCRIPT");
// This file is about local storage and sessiom storage.
let body = document.querySelector('div#container');
let x = document.createElement('h1');
x.id = 'h1';
x.innerText = '18//JAVASCRIPT';
let y = document.createElement('h2');
y.id = 'about';
y.innerHTML = '<u>Local & Session Storage</u>'
let z = document.createElement('hr');
body.appendChild(x);
body.appendChild(y);
body.appendChild(z);
// First you need to know that there is a local storage in the 'Application' section.
// We can access that object through certain functions in JS.

// LOCAL STORAGE

localStorage.setItem('Ginger', '250 grams');
localStorage.setItem('Onion', '2500 grams');
localStorage.setItem('Potato', '5000 grams');
console.log('Local Storage In Console :')
console.table(window.localStorage);
// 19th line is how you can see that storage in console.
// Note: local storage saves your work permanently, even if you remove a line of code.
// So if you wanna clear the object, just simply go into appliction section, then click local storage, left-click the section where your file name appears now, select 'clear'.
console.log('\nSome More Checks :');
// Now we will do some checks.
console.log("Type of local storage object : " + typeof window.localStorage);
console.log("Quantity of potato required : " + window.localStorage.Potato);
console.log("Type of ginger's(key's) value : " + typeof window.localStorage.Ginger);

// Clearing :
// localStorage.clear();
// If you refresh the page after clearing, you can get those legitimate key-values again without those accidently made pairs.

// Clearing(Particularly) :
// localStorage.removeItem('Ginger');

// Getting an element by making a var.
let item_x = localStorage.getItem('Onion');
console.log(item_x)

// Adding an Array :
let dummy_array = ['Humans', 'Animals', 'Plants'];
localStorage.setItem('Dummy', dummy_array);
// You can see that this function set the array as a value in form of 'Humans,Animals,Plants'.
// but if we want '['Humans','Animals','Plants']' to be set as key/value, we will use JSON.stringify function :-
localStorage.setItem('Modified_dummy', JSON.stringify(dummy_array));
// This will make the whole array a string with braces as well.


// SESSION STORAGE
// Since the session storage keeps the data permanent, even if code is removed, and can only be refreshed after clearing to do so.
// But session storage is temporary and removes the data as we remove code.
// Example :
sessionStorage.setItem("DUMMY", "DUMMY-VALUE");
console.table(window.sessionStorage)
// Follow these steps to understand this object workings :
// make line 57 a comment.
// close the webpage opened.
// Run the html page again.
// the dummy key-value pair willbe found removed.

// uncomment the line to get it again.