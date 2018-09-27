/*
RECAP
*/

let strExample = 'string'
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof conditionExample === 'string'){
    console.log('yep, it\'s a string');
}   else if (typeof conditionExample === 'number'){
        console.log('yep, it\'s a number');
}   else if (typeof conditionExample === 'boolean'){
    console.log('yep, it\'s a boolean')
}

console.log(typeof conditionExample);111
//switch
switch (typeof conditionExample) {
    case 'string':
    console.log('this is a string');
    break;
    case 'number':
    console.log('this is a number');
    break;
    default:
   console.log('this variable is not a string or number')
   break;
}

//turnary example
(typeof conditionExample === 'string') ? console.log('our variable is a string') 
: (typeof conditionExample === 'number') ? console.log('our variable is a number')
: (typeof conditionExample === 'undefined') ? console.log ('our variable is undefined')
: console.log('our variable is neither a string, number, nor undefined');



let FB = 15;

if (FB % 3 === 0 && FB % 5 ===0){
    console.log('Fizz Buzz');
} else if (FB % 5 === 0){
    console.log('Buzz');
} else if (FB % 3 === 0){
    console.log('Fizz')
}

let FB = 15;

switch (true){
    case(FB % 15 === 0):
    console.log('Fizz Buzz');
    break;
    case(FB % 5 === 0):
    console.log('Buzz');
    break;
    case(FB % 3 === 0):
    break;
}

let FB = 15;

(FB % 15 === 0) ? console.log('Fizz Buzz')
: (FB % 5 === 0) ? console.log('Buzz')
: (FB % 3 === 0) ? console.log('Fizz')
: console.log('Neither divisible by 5 nor 3');