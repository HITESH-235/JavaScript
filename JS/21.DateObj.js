console.log("21//JAVASCRIPT");

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerHTML = '21//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>DATE OBJECTS: DATE AND TIME</u>'
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "DATE OBJECTS: DATE & TIME"
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

let today = new Date();
console.log("CURRENT DATE AND TIME --",today);
let x = document.createElement('p');
x.innerText = today;
body.append(x);

let my_birthday = new Date('3-6-2006 03:15:00');
// let otherdate = new Date('12/04/1976 00:00:00');
// let otherdate = new Date("July 28 1988");
// You can use any format, and if you don't give a time, 00:00:00 will be the default.
// FORMAT-- MM/DD/YY.
console.log("ANY DATE --",my_birthday);
console.log("DAY OF THE GIVEN DATE --",my_birthday.getDay());
// GIVES NUMBER STARTING FROM 0 ACCORDING TO DAYS OF WEEK.
// SIMILARLY .....
// console.log(my_birthday.getDate());
// console.log(my_birthday.getMinutes());
// console.log(my_birthday.getMonth())
// console.log(my_birthday.getTime())
// console.log(my_birthday.getHours())
// You can try many things like this.

// MODIFYING .....
// my_birthday.setDate(24);
// console.log(my_birthday);
// Same as above, try anything...
