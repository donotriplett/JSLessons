/*
VARIABLES

1) a variable must begin with a letter, underscore, or dollar sign
2) you can use numbers, but they must follow one of the above
3) JavaScript is case sensative--'hello' and 'Hello' are different
*/

var a = 1;
var b = 2;
console.log(a + b); //3

/*
DECLARATIONS

1) declarations are the LEFT side of a variable
    It is simply the var x
    It is on the left side of the assingment operator (=)

Initializations are the RIGHT side of a variable
    set the value of the variable
    Includes the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x;
console.log('Declaration', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

/*
Var, Let, and Const:
var = 'old' js keyword for variables
let = 'new' js keyword for variable (introduced in ES6)
const = also 'new'; declares unchangable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'lovely!';
console.log(today, elevenFifty);

/* let cup = 'water';
cup = 'coffee'; */

//eleventFifty = 'Super!';
console.log(today, elevenFifty);
