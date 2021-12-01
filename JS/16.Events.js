console.log('16//JAVASCRIPT');
// This file is about events and event objects.
// This will introduce how pages interact on certain action on screen, called Events.
let y = document.querySelector("h1#h1");
y.innerHTML = '16//JAVASCRIPT';
// let element_x = document.createElement('div');
let parent_x = document.querySelector("#container");
// parent_x.appendChild(element_x);
// element_x.innerHTML = "This is a dummy sentence.";
// element_x.id = "dummyId1";
// element_x.className = "dummyClass1"

// element_x.addEventListener("click", function(x) {
//     let variable_x = x.target;
//     element_x.style.color = 'white'
//     element_x.style.textDecoration = 'underline'
//     parent_x.append(element_x.innerText);
//     let temp_x = document.createElement('br');
//     parent_x.append(temp_x);   
//     console.log("You just clicked the dummy sentence");
// });
// console.log("real element_x will turn white on clicking")
// See what happens on clicking element_x.
// append property is able to take both node/element, but appendChild only takes an element.
// You can make it do anything just by clicking the particular sentence.

// Another variable for intance.
let element_x_2 = document.createElement('div');
parent_x.appendChild(element_x_2);
element_x_2.innerHTML = "This is a dummy sentence-2.";
element_x_2.id = "dummyId2";
element_x_2.className = "dummyClass2"

element_x_2.addEventListener("click", function (x_2) {
          let variable_x_2 = x_2.target;
          element_x_2.style.color = 'wheat'
          element_x_2.style.textDecoration = 'underline'

          // variable_x_2 = x_2.target.className
          // console.log("Class of the element_x_2 :",variable_x_2);

          // variable_x_2 = x_2.target.id
          // console.log("Id of the element_x_2 :",variable_x_2)

          variable_x_2 = x_2.offsetX;
          console.log("Distance from 1st place to where you clicked(x axis) :", variable_x_2, "px")

          variable_x_2 = x_2.offsetY;
          console.log("Distance from leftmost pos of letter to where you clicked(Y axis) :", variable_x_2, "px")

          variable_x_2 = x_2.clientX;
          console.log("Distance from top of screen to where you clicked(x axis) :", variable_x_2, "px")

          variable_x_2 = x_2.clientY;
          console.log("Distance from leftmost of screen to where you clicked(y axis) :", variable_x_2, "px")
});


