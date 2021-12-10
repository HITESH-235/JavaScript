console.log("24//JAVASCRIPT");

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerHTML = '24//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>ES6: CLASSES AND INHERITANCE</u>';
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "ES6";
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

class Student {
          constructor(x_name, x_class, x_age) {
                    this.name = x_name,
                    this.class = x_class,
                    this.age = x_age
          };
          //  Functions inside a class:(Goes to  prototype)
          Intro() {
                    return `My name is ${this.name} and I am from class ${this.class}.`;
          };
          // Declare as many functions as you want inside one  class.....

          //Statit functions which do not requires new object to be desplayed:
          static add(a, b, c) {
                    return a + b + c;
          };
}
