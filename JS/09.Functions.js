console.log('09//JS');
//This file is about functions in JS.

function dummyfunction(variable, number) {
    console.log(variable + number);
};

dummyfunction("Player no. 1 -", 72);
// Now, if we give only one argument to this function, it is going to give error.
// So we will make a default value of "number" in another function.
function dummyfunction_2(variable, number = 108) {
    console.log(variable + number);
};

dummyfunction_2("Player no. 2 -");
// Here we haven't given the second argument so it took the default argumnent "108".

// Return statement
function printtabble(num1, num2) {
    for (let i = 0; i < num2; i++) {
        var x = console.log(`${num1} X ${i + 1} = ${num1 * (i + 1)}`)
    };
    return x;
};
printtabble(12, 10);