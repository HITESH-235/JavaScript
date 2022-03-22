console.log('04//JS');
// Type conversion and type coercion

let intvar;
intvar = String(34);
// This is how we cnvrt an int to string
console.log(intvar, "is now a", (typeof intvar));

let datevar = String(new Date());
console.log(datevar, "is now a", (typeof datevar))

// The 'String' function works same as python's 'str' function

let i = 124;
console.log(typeof (i.toString()));
// "i.toString()" as a whole would be a string
console.log(typeof i)
// 'i' will still be a number
// ".toString" here is another way of printing in string form

let str = Number("455347547");
console.log(str, "is now a " + (typeof str));
// "Number" is same as python's 'int'
// Now we will do the same with a boolean

let bool = Number(true);
console.log("'true' has now been converted to " + (typeof bool) + " i.e.", bool);
// Since false and true are actually 0, 1, so their integral form would be the same

// Note : If we gave it a non-num to convert to a num, e.g. 214dsg, it would give "NaN", meaning "Not a number"

// Now, we saw number func changes to a number, but it also prints as it is with a dec num
// for overcoming this problem, we can slice a dec num's decimal part by the func 'parseInt'

let x = parseInt('34.7222');
console.log("34.7222 has now been made " + x + ", which is a " + (typeof x))

let x0 = parseFloat("56.364365")
console.log("the string '56.364365' has been converted to a float,", x0)
// we can use parseFloat() when we don't want to  slice the decimal part of number

let x1 = 22.43543624362364576;
console.log(x1.toFixed(5));
// This func restricts or makes the decimal places to given input no.
// But toFixed follows old method of estimation.