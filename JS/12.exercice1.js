console.log('12//JS');

// Here we are creating a code which will get only the desired links we want(even if they exists in more than one time).

console.log('Method 1')
console.log("All links of Google:-");
let mylink = "https://www.google.com/";
// 'mylink' will be the variable which will be our query.
let link = document.links;
// 'link' now contains all the links in an object.
let x = 1;
Array.from(link).forEach(function (element) {
          if (mylink == element.href) {
                    console.log(x++, element);
                    // You can write console.log(element.href) to print only link.
          };
});

console.log('Method 2');
console.log("All links of class 'item':-");
let link1 = document.getElementsByClassName("item");
// 'lnik1 'now contains all the links in an object.
x = 1;
Array.from(link1).forEach(function (element) {
          console.log(x++, element);
});