console.log('07//JS');
// This file is about conditional statements(the if, else statement).

const x = 72;
if (x == 36) {
          console.log("X is equal to 36.")
}
else if (x == 72) {
          console.log("X is equal to 72.")
}
else {
          console.log("X is not equal to any required no.")
};
// This is a normal conditional statment.
// Note : while using if-else together, remember not to use semilcolon in between its lines.
// GIve a semicolon at the very end of else statement.

const x0 = "1234";
if (x0 == 123) {
          console.log("X0 is equal to 123.")
}
else if (x0 == 1234) {
          console.log("X0 is equal to 1234.")
}
else {
          console.log("X0 is not equal to any required no.")
};
// Here we are seeing that even x0 was a string, it was evaluated.
// This is because when we use "==" then only the actual value of the variable is evaluated despite the fact that it is string, int, num, etc.

// So for getting accurate to resolve this 'value' problem, we use "===".
// It gets executed when either value and data type is same.
const x1 = "123456";
if (x1 === 123456) {
          console.log("X1 is equal to 123456.")
}
else if (x1 === "123456") {
          console.log("X1 is equal to '123456'.")
}
else {
          console.log("X is not equal to any required no.")
};

// if we want to check  for non equality, we use "!=".
// But it also only evaluates the value.
// So we use "!==" for this, which is executed when neither the value, nor the type is same.

const x2 = "567";
if (x2 !== 567) {
          console.log("X2 is not equal to 567.")
}
else {
          console.log("X2 is equal to '567'.")
};

const x3 = true;
if (x3) {
          console.log("X3 exists.")
}
else {
          console.log("X3 doesn't exists.")
};
// This is how a boolean is checked.

const x4 = 12;
const x5 = "str";

if (typeof x4 == 'number' && typeof x5 == 'string') {
          console.log("X4 is a number & X5 is a string.")
}
else {
          console.log("Error")
}
// This is how and statement is used.
// Also, this is how "typeOf" is used in conditional statment.

const x6 = 23;
console.log(x6 == 23 ? "X6 is equal to 23" : "X6 is not equal to 23")
// This is how we can write if else inside console statement.

const age = 18;
switch (age) {
          case 18:
                    console.log("You are an adolescent")
          // break;
          case 9:
                    console.log("You are a kid")
                    break;
          case 13:
                    console.log("You are an adult")
                    break;
          default:
                    console.log("You are a ghost")
                    break;
}
// These are a different kind of conditional statements of JS.
// They don't have "elif" statment.
// They have "case" as their "if" statements.
// That is why every of them gets executed
// And so to escape from this con, we have used "break" statement, which works same as of python.
// If you don't use break, then it will write all consoles beneath it whether of any case.
// That default statement is agreed only when none of them 
