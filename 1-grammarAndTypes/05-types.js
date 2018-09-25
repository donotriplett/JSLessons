/*
TYPES
*/

//Booleans
let T = true;
console.log(T);  //output -> true

let F = false;
console.log(F); //output -> false

//boolean can represent: true/false, on/off, yes/no

//Null
/*
Null = empty value(not 0; not undefined)

it is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty)

//Undefined
/*
undefined = no value assigned (not even an empty container)

undefined is not an error
*/

let undef = undefined
console.log(undef)

let grass; 
console.log(grass)

/* think of undefined and null as packages in UPS
null = package deliberately sent out from UPS as emtpy
undefined = package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite.toFixed(2));

let anotherNum = 0.2 + .1;
console.log(anotherNum);

let num = 0.3;
console.log(num);
                    //(2      +     1   )/10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard)

//Strings
//strings = any value within quotes; JS will spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//number vs strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second); //string

//What's going on here?
// + -> addition when given 2 numbers, concatenation when given 2 strings

let third = 1050 + '100';
console.log(third); //string

let firstName = 'donovan';
let lastName = 'triplett';
let houseNumber = 2029;
let street = 'albany st';
let city = 'beach grove';
let state = 'indiana';
let zipcode = 46107;
console.log(firstName, lastName + ',', houseNumber, street + ',', city +',', state, zipcode);

//Objects
/*
What is an object?

a container that can hold multiple datatypes

denoted by {}
has keys and values (color (key): 'blue' (value)), seperated with a colon
Each key seperated with a comma
*/

let burritosNow= {
    size: 'large',
    quanity: 4,
    now: true
}

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists

denoted by []
have values seperated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true]
console.log(burritos);
console.log(typeof burritos);