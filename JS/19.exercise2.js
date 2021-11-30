console.log('19//JAVASCRIPT');
// Exercise 2
console.log("Create a div tag which when clicked turns editable and whenever clicked away(blur), save the note into local storage.")

let main = document.createElement('div');
let parents = document.querySelector('div#container');
parents.appendChild(main);
console.log(parents)

main.innerHTML = "<u>ClickHere</u>";
main.addEventListener('click', make_it_edit);

function make_it_edit(x) {
          let modified = document.createElement('form')
          main.replaceWith(modified);
          let edit_obj = document.createElement('input')
          edit_obj.className = 'firstclass'
          edit_obj.setAttribute('type', 'text')
          edit_obj.setAttribute('value', 'ClickHere')
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
          }
}