console.log('19//JAVASCRIPT');
// Exercise 2
let body = document.querySelector('div#container');
let x = document.createElement('h1');
x.id = 'h1';
x.innerText = '19//JAVASCRIPT';
let y = document.createElement('h2');
y.id = 'about';
y.innerHTML = '<u>EXERCISE-2</u>'
let z = document.createElement('hr');
body.appendChild(x);
body.appendChild(y);
body.appendChild(z);
console.log("Create a div tag which when clicked turns editable and whenever clicked away(blur), save the note into local storage.")

let main = document.createElement('div');
let parents = document.querySelector('div#container');
parents.appendChild(main);
console.log(parents)

main.innerHTML = "<u>ClickHere</u>";
main.addEventListener('click', make_it_edit);

function make_it_edit() {
          let modified = document.createElement('form')
          main.replaceWith(modified);
          let edit_obj = document.createElement('input')
          edit_obj.className = 'firstclass'
          edit_obj.setAttribute('type', 'text')
          edit_obj.setAttribute('placeholder', 'WriteHere')
          edit_obj.style.background = 'transparent'
          edit_obj.style.color = 'inherit'
          edit_obj.style.fontFamily = 'Agency FB'
          edit_obj.style.fontSize = 'inherit'
          edit_obj.style.fontWeight = 'bold'
          modified.appendChild(edit_obj);
          edit_obj.addEventListener('blur', second);
          let y = document.createElement('input');
          y.setAttribute('type', 'hidden')
          y.className = "class"
          parents.appendChild(y);
          function second(x) {
                    var z = document.querySelector("input.firstclass").value;
                    document.querySelector("input.class").innerHTML = z;
                    localStorage.setItem('What-You-Wrote', document.querySelector("input.firstclass").value);
                    console.table(window.localStorage)
                    document.querySelector("input.firstclass").value = "";
          }
}