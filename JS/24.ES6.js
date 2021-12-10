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

// CLASSES:
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

// The static functions which doesn't requires any object:
console.log(Student.add(2, 34, 56));

// Normal functions:
let new_obj = new Student("Hitesh", "IX B", 15);
console.log(new_obj);
console.log(new_obj.Intro());

// INHERITING THE CLASS INTO ANOTHER:
class Inherited extends Student {
          constructor (y_name, y_class, y_age, y_hobby, y_house){
                    super(y_name, y_class, y_age);
                    // Since we are inheriting  the properties of another class, we can copy their properties of contructor using this "super()"  and writing the corresponding values inside those brackets.
                    // You can add new properties to them too, inheriting doesn't restricts anything....
                    this.hobby = y_hobby;
                    this.house = y_house;
          };
          // Still you can make many functions  whether static or not
};

let new_obj_2 = new Inherited("Shubham","IX C",15,"Cricket","Red");
console.log(new_obj_2);
console.log(new_obj_2.age);
// This is just for showing that inheriting still doesn't makes any other difference in working of classes.
