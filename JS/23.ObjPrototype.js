console.log("23//JAVASCRIPT");

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerHTML = '23//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>OBJECT PROTOTYPE</u>';
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "OBJECT PROTOTYPE";
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

let obj_1 = {
          name : 'Hitesh',
          class : 9,
          House : 'Green'
};
console.log(obj_1);
// This is a normal object literal which cannot change its "pre defined properties".
// These pre defined propertied lies in the "prototype" section you see in console.

// But contructors are different:-
function Obj_creator(giveName) {
          this.name = giveName;
};

Obj_creator.prototype.anyName = function () {
          console.log(this.name);
};
// Here we have added a new "pre difined property".
// You can see it in prototype section.
let obj_2 = new Obj_creator('Rohan');
console.log(obj_2);
obj_2.anyName;

// PROTOTYPE INHERITENCE
// creating an object maker for employees:
const proto = {
          slogan: function () {
                    return "This compay is the best.";
          },
          changeName: function (newName) {
                    this.name =  newName;
          },
          changeRole: function (newRole) {
                    this.role = newRole
          }
};
// I made it constant so that changing is restricted.

// Creating an object:
// let obj_x = Object.create(proto);
// Assigning values to it.
// obj_x.name = "Hitesh";
// obj_x.role = "Employee";

// Alternative of above lines:
let obj_x = Object.create(proto, {
          name: {value: "Hitesh"},
          role: {value: "Employee", writable: true}
});
obj_x.changeName("Hitesh_2");
// This "change" as we haven't used "writable", but...
// obj_x.changeRole("Programmer");
// This will work, you know why....
console.log(obj_x);

// Another Example:
function Employee(name, salary, experience) {
          this.name = name;
          this.salary = salary;
          this.experience = experience;
};
Employee.prototype.slogan = function () {
          return `This is the best company, regards ${this.name}`;
};
let hitesh_obj = new Employee("Hitesh",3400000,10);
console.log(hitesh_obj);
console.log(hitesh_obj.slogan());

// Another Example:
function Programmer(name1, salary1, experience1, language) {
          Employee.call(this, name1, salary1, experience1);
          // This is how call function is used.
          this.language = language;
};
// Inheriting the property/properties of "Employee" into "Programmer":
Programmer.prototype = Object.create(Employee.prototype);
// "Object.create" actually builds new functions and adding them for prototype.
let x_object = new Programmer("x_name",23000,3,"English");
console.log(x_object);
// Check its prototype.
// You will find that it doesn't have its own functions like, constructor in the prototype.
// SO.......
Programmer.prototype.constructor = Programmer;
let y_object = new Programmer("y_name",89000,5,"English");
console.log(y_object);
