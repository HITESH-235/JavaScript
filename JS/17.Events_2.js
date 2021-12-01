console.log("17//JAVASCRIPT");
let y = document.querySelector("h1#h1");
y.innerHTML = '17//JAVASCRIPT';
// Making a form for use:-
let form_x = document.createElement("form");
form_x.setAttribute('action', 'no.php');
let input_x = document.createElement('input');
input_x.setAttribute('type', 'button');
input_x.setAttribute('value', 'Click Here');
input_x.style.color = 'orange';
input_x.style.fontFamily = 'Inherit';
input_x.style.fontSize = 'Inherit';
input_x.style.fontWeight = 'bold';
input_x.style.background = 'transparent';
input_x.id = 'button';
form_x.appendChild(input_x);
let parent_x = document.querySelector('#container');
parent_x.appendChild(form_x);
// Created a button within script.

let button_x = document.getElementById('button');
// button_x.addEventListener('click', onClickEvent);
// button_x.addEventListener('dblclick', onDblClickEvent);
// button_x.addEventListener('mousedown', onAnyEvent);
// function onClickEvent(x) {
//     input_x.style.color = 'white';
//     input_x.style.textDecoration = 'underline';
//     Event_1 = document.createElement('div');
//     Event_1.innerHTML = 'Thanks for clicking';
//     parent_x.appendChild(Event_1);
// };

// function onDblClickEvent(x) {
//     input_x.style.color = 'yellow';
//     input_x.style.textDecoration = 'underline';    
//     Event_1 = document.createElement('div')
//     Event_1.innerHTML = 'Thanks for Double Clicking';
//     parent_x.appendChild(Event_1);
// };
// function onAnyEvent(x) {
//     input_x.style.color = 'aqua'; 
//     console.log("You just did a thing to the button");
// };

// There are many kinds of events like click, mousedown, scroll, etc. Just search for google.
