/*
RETURNS
*/

function fullName(fName, lName){
    return fName + ' ' + lName;
}

var fullName = fullName('Donovan', 'Triplett');
console.log(fullName)

function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(addNums(2, 3));

function tip(price, percent) {
    return price * percent;
}

var tip = tip(300, .20)
console.log(tip)