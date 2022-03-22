console.log('02//JS');
// variables in js
var name1 = "Hitesh";
console.log(name1, '//This is a variable named hitesh');
// OR-----write like this
var title1;
title1 = 'Sinha';
console.log(title1);
// you can assign a number to var too
// Some rules for creating a var
// 1.It's name cannot start with a number
// 2.Can start with letters, '$' and '_'
// 3.Are case sensitive
// 4.Are changeable(takes the latest value of variable)
// But 4th rule is not applied to a 'const'
const websitename = "codonstream";
// websitename = "jguwrghbwre";
// Throws error if tried to change (like above line)
console.log("Website's name :", websitename);

{
          let websitename = 'codon-stream';
          websitename = "random name";
          console.log("local(let) Website's name :", websitename);
}
// let is same as var, but it works only locally, it has nothing to do with outside world

const arr1 = [12, 23, 324, 24, 34, 5];
arr1.push(72);
// appends 72 to the last
console.log(arr1);