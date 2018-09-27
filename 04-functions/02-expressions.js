/*
EXPRESSIONS
*/
console.log(typeof hi); //expecting: function, output: undefined
var hi = function hi() {
    console.log('hello');
}
hi(); //output -> 'hello'
