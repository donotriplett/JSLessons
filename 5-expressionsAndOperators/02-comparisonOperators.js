/*
COMPARISON OPERATORS
*/

//equality
console.log('3' == 3);  //type coercion, output -> true
console.log('three' == 3);  //false
console.log(0 == false); //true, (0, false, null, and '' are all false when using ==)

//strict equality, check value AND type 
console.log(3 === 3); //true
console.log('3' === 3); //false

//not equal
console.log('4' != 4); //doesnt care about type, output -> false

//strict not equal
console.log('3' !== 3); //checks type and value

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or = to
console.log(3 >= 3);

//less than or = to
console.log(4 <= 4);

//And: returns true if the left and right are both true
console.log(true && true); //true
let x =5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15); //false

let str = 'a';
console.log(str < 'p'); //true

//Or: return true if left OR right are true
console.log(true || false); //true
let x = 5;
console.log(x < 10 || x > 15); //true
